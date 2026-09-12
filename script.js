const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const titles = { dashboard: 'صباح الخير، ياسين 👋', production: 'إدارة الإنتاج', inventory: 'إدارة المخزون', workers: 'العمال والموظفون', reports: 'التقارير' };
const eyebrow = { dashboard: 'السبت، 12 شتنبر 2026', production: 'تتبع العمليات اليومية', inventory: 'المواد والمنتجات', workers: 'الحضور والأداء', reports: 'ملخص الأداء والمؤشرات' };
function showToast(title, message='تم حفظ العملية بنجاح.') { $('#toastTitle').textContent = title; $('#toastMessage').textContent = message; $('#toast').classList.add('show'); setTimeout(() => $('#toast').classList.remove('show'), 3200); }
function switchView(view) { $$('.view').forEach(v => v.classList.remove('active-view')); const target = $('#' + view); if (target) target.classList.add('active-view'); $$('.nav-item[data-view]').forEach(btn => btn.classList.toggle('active', btn.dataset.view === view)); $('#pageTitle').textContent = titles[view] || titles.dashboard; $('#pageEyebrow').textContent = eyebrow[view] || eyebrow.dashboard; $('#sidebar').classList.remove('open'); window.scrollTo({top:0, behavior:'smooth'}); }
$$('[data-view]').forEach(btn => btn.addEventListener('click', () => switchView(btn.dataset.view)));
$('#mobileMenu').addEventListener('click', () => $('#sidebar').classList.toggle('open'));
$('#notificationBtn').addEventListener('click', () => showToast('التنبيهات', 'لديك 3 تنبيهات تحتاج إلى انتباهك.'));
$('#chartRange').addEventListener('change', (e) => showToast('تم التحديث', `يتم عرض بيانات ${e.target.value}.`));
const modal = $('#modal');
function openModal() { modal.classList.add('open'); setTimeout(() => modal.querySelector('input').focus(), 50); }
function closeModal() { modal.classList.remove('open'); }
$('#quickAddBtn').addEventListener('click', openModal); $('#addProductionBtn').addEventListener('click', openModal); $('#closeModal').addEventListener('click', closeModal); modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
$('#productionForm').addEventListener('submit', e => { e.preventDefault(); const data = new FormData(e.target); const row = document.createElement('tr'); row.innerHTML = `<td><b>#PR-${Math.floor(2409 + Math.random()*90)}</b><small>الآن</small></td><td><span class="product"><i class="product-dot teal-dot"></i>${data.get('product')}</span></td><td>${Number(data.get('quantity')).toLocaleString('ar-MA')} قطعة</td><td>${data.get('shift')}</td><td><span class="status progress">قيد التنفيذ</span></td>`; $('#productionTable').prepend(row); e.target.reset(); closeModal(); showToast('تمت إضافة العملية', 'ستظهر العملية الجديدة في جدول الإنتاج.'); switchView('production'); });
$('#productionDemoBtn').addEventListener('click', () => { openModal(); });
$('#addInventoryBtn').addEventListener('click', () => showToast('إضافة مادة', 'يمكنك الآن تجهيز بيانات المادة الجديدة.'));
$('#addWorkerBtn').addEventListener('click', () => showToast('إضافة عامل', 'نموذج إضافة العامل جاهز في النسخة القادمة.'));
$('#exportBtn').addEventListener('click', () => { const content = 'تقرير مصنعتي\nالإنتاج الشهري: 24,680 قطعة\nمعدل الحضور: 91.6%\nقيمة المواد المصروفة: 72,450 درهم'; const blob = new Blob([content], {type:'text/plain;charset=utf-8'}); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = 'تقرير-مصنعتي.txt'; a.click(); URL.revokeObjectURL(url); showToast('تم تصدير التقرير', 'تم تنزيل ملف التقرير على جهازك.'); });
$('#globalSearch').addEventListener('input', e => { const query = e.target.value.trim().toLowerCase(); $$('#productionTable tr').forEach(row => row.style.display = row.textContent.toLowerCase().includes(query) ? '' : 'none'); if (query && !$('#production').classList.contains('active-view')) switchView('production'); });

import { useMemo, useState } from "react";
import {
  Activity,
  AlertTriangle,
  ArrowDownLeft,
  ArrowUpRight,
  BarChart3,
  Bell,
  Boxes,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Circle,
  ClipboardList,
  Clock3,
  Download,
  Factory,
  Filter,
  LayoutDashboard,
  Menu,
  MoreHorizontal,
  PackageCheck,
  Plus,
  Search,
  Settings2,
  Sparkles,
  Truck,
  UserRound,
  UsersRound,
  Warehouse,
  X,
} from "lucide-react";

type NavItem = { label: string; icon: typeof LayoutDashboard; badge?: string };

const navItems: NavItem[] = [
  { label: "نظرة عامة", icon: LayoutDashboard },
  { label: "الإنتاج", icon: Factory, badge: "04" },
  { label: "المخزون", icon: Boxes, badge: "12" },
  { label: "العمال", icon: UsersRound },
  { label: "التقارير", icon: BarChart3 },
];

const schedule = [
  { code: "PR-1042", name: "زيت الزيتون البكر", meta: "خط التعبئة A · 08:00 — 12:30", progress: 78, tone: "green", status: "قيد التشغيل" },
  { code: "PR-1043", name: "عسل جبلي طبيعي", meta: "خط التعبئة B · 10:30 — 15:00", progress: 46, tone: "blue", status: "قيد التشغيل" },
  { code: "PR-1044", name: "مربى التين الموسمية", meta: "قسم التحضير · 14:00 — 18:30", progress: 0, tone: "amber", status: "في الانتظار" },
];

const inventory = [
  { name: "قنينات زجاجية 500ml", category: "مواد التعبئة", quantity: "2,480", unit: "قطعة", status: "متوفر", tone: "green" },
  { name: "عسل جبلي خام", category: "مواد أولية", quantity: "186", unit: "كغ", status: "منخفض", tone: "amber" },
  { name: "أغطية معدنية ذهبية", category: "مواد التعبئة", quantity: "6,240", unit: "قطعة", status: "متوفر", tone: "green" },
  { name: "ملصقات مدار — 500ml", category: "مواد الطباعة", quantity: "940", unit: "قطعة", status: "ينبغي الطلب", tone: "red" },
];

const workers = [
  { name: "ياسين العلوي", role: "مشرف الإنتاج", initials: "يع", status: "متصل", color: "green" },
  { name: "سلمى الإدريسي", role: "مسؤولة الجودة", initials: "سا", status: "متصل", color: "purple" },
  { name: "حمزة بنعمر", role: "مشغل خط التعبئة", initials: "حب", status: "استراحة", color: "orange" },
];

function MetricCard({ icon: Icon, label, value, note, trend, accent }: { icon: typeof Activity; label: string; value: string; note: string; trend: string; accent: string }) {
  return (
    <div className="metric-card glass-card">
      <div className="metric-top"><span className={`metric-icon ${accent}`}><Icon size={19} /></span><button className="icon-button" aria-label="المزيد"><MoreHorizontal size={18} /></button></div>
      <div className="metric-label">{label}</div>
      <div className="metric-value">{value}</div>
      <div className="metric-note"><span className="trend"><ArrowUpRight size={14} /> {trend}</span><span>{note}</span></div>
    </div>
  );
}

function AppLogo() {
  return <div className="brand-mark"><span className="brand-orbit orbit-one" /><span className="brand-orbit orbit-two" /><span className="brand-dot" /></div>;
}

export default function Home() {
  const [activeNav, setActiveNav] = useState("نظرة عامة");
  const [menuOpen, setMenuOpen] = useState(false);
  const [toast, setToast] = useState("");
  const [search, setSearch] = useState("");
  const [showTask, setShowTask] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">(() => (localStorage.getItem("madar-theme") as "dark" | "light") || "dark");

  const filteredInventory = useMemo(() => inventory.filter((item) => `${item.name} ${item.category}`.toLowerCase().includes(search.toLowerCase())), [search]);

  const notify = (message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(""), 2800);
  };

  const selectNav = (label: string) => {
    setActiveNav(label);
    setMenuOpen(false);
    if (label !== "نظرة عامة") notify(`تم فتح قسم ${label}`);
  };

  return (
    <div className={`app-shell ${theme === "light" ? "light-theme" : ""}`} dir="rtl">
      <aside className={`sidebar ${menuOpen ? "is-open" : ""}`}>
        <div className="sidebar-head"><div className="brand"><AppLogo /><div><strong>مَدار</strong><span>إدارة العمليات</span></div></div><button className="close-menu" onClick={() => setMenuOpen(false)} aria-label="إغلاق القائمة"><X size={20} /></button></div>
        <div className="workspace"><div className="workspace-avatar">م</div><div><small>مساحة العمل</small><b>مصنع مدار</b></div><ChevronDown size={16} /></div>
        <div className="nav-section-label">القائمة الرئيسية</div>
        <nav className="main-nav">
          {navItems.map(({ label, icon: Icon, badge }) => <button key={label} className={`nav-link ${activeNav === label ? "active" : ""}`} onClick={() => selectNav(label)}><Icon size={19} strokeWidth={activeNav === label ? 2.3 : 1.8} /><span>{label}</span>{badge && <em>{badge}</em>}</button>)}
        </nav>
        <div className="nav-section-label secondary-label">النظام</div>
        <button className="nav-link" onClick={() => notify("الإعدادات ستكون متاحة قريباً")}><Settings2 size={19} /><span>الإعدادات</span></button>
        <div className="sidebar-bottom"><div className="help-card"><div className="help-icon"><Sparkles size={17} /></div><div><b>تحتاج مساعدة؟</b><small>تواصل مع فريق الدعم</small></div><ArrowUpRight size={16} /></div><div className="profile"><div className="profile-avatar">م.ع</div><div><b>محمد العروسي</b><small>مدير العمليات</small></div><MoreHorizontal size={18} /></div></div>
      </aside>
      {menuOpen && <button className="sidebar-overlay" aria-label="إغلاق القائمة" onClick={() => setMenuOpen(false)} />}

      <main className="dashboard-main">
        <header className="topbar"><div className="topbar-right"><button className="mobile-menu" onClick={() => setMenuOpen(true)} aria-label="فتح القائمة"><Menu size={22} /></button><div><div className="eyebrow">السبت، 12 شتنبر 2026</div><h1>صباح الخير، محمد <span>👋</span></h1></div></div><div className="topbar-actions"><div className="header-search"><Search size={17} /><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="ابحث في النظام..." /><kbd>⌘ K</kbd></div><button className="theme-toggle" onClick={() => { const next = theme === "dark" ? "light" : "dark"; setTheme(next); localStorage.setItem("madar-theme", next); }} aria-label="تبديل النمط">{theme === "dark" ? "☀️ شمسي" : "🌙 ليلي"}</button><button className="notification-button" onClick={() => notify("لا توجد إشعارات جديدة")} aria-label="الإشعارات"><Bell size={19} /><i /></button><div className="header-avatar">م.ع</div></div></header>

        <div className="content-wrap">
          <section className="hero-row"><div><div className="section-kicker"><span className="live-dot" /> لوحة التحكم الرئيسية</div><h2>نظرة عامة على العمليات</h2><p>تابع أداء المصنع، الإنتاج، والمخزون من مكان واحد.</p></div><div className="hero-actions"><button className="secondary-button" onClick={() => notify("جاري تجهيز تقرير اليوم...")}><Download size={17} /> تصدير التقرير</button><button className="primary-button" onClick={() => setShowTask(true)}><Plus size={18} /> إضافة مهمة</button></div></section>

          <section className="metrics-grid"><MetricCard icon={Factory} label="الإنتاج اليومي" value="8,420" note="من أصل 10,000 وحدة" trend="12.8%" accent="green" /><MetricCard icon={Boxes} label="قيمة المخزون" value="248,650" note="درهم مغربي" trend="4.6%" accent="blue" /><MetricCard icon={UsersRound} label="العمال الحاضرون" value="42 / 48" note="نسبة الحضور 87.5%" trend="3.2%" accent="purple" /><MetricCard icon={PackageCheck} label="الطلبيات الجاهزة" value="126" note="8 طلبيات مستعجلة" trend="8.4%" accent="orange" /></section>

          <section className="main-grid"><div className="panel glass-card production-panel"><div className="panel-heading"><div><h3>خطة الإنتاج</h3><p>تتبع تقدم خطوط الإنتاج اليوم</p></div><button className="text-button" onClick={() => selectNav("الإنتاج")}>عرض الكل <ArrowDownLeft size={15} /></button></div><div className="production-list">{schedule.map((item) => <div className="production-item" key={item.code}><div className="production-icon"><Factory size={20} /></div><div className="production-info"><div className="production-title"><b>{item.name}</b><span>{item.code}</span></div><div className="production-meta"><span>{item.meta}</span><strong className={item.tone}>{item.status}</strong></div><div className="progress-line"><span className={item.tone} style={{ width: `${item.progress}%` }} /></div><small>{item.progress ? `${item.progress}% مكتمل` : "لم يبدأ بعد"}</small></div><button className="item-more" aria-label="خيارات"><MoreHorizontal size={18} /></button></div>)}</div></div>
            <div className="panel glass-card chart-panel"><div className="panel-heading"><div><h3>مؤشر الإنتاج</h3><p>الوحدات المنتجة خلال الأسبوع</p></div><button className="period-button">هذا الأسبوع <ChevronDown size={14} /></button></div><div className="chart-summary"><div><strong>52,840</strong><span><ArrowUpRight size={14} /> 18.4%</span></div><small>إجمالي الوحدات</small></div><div className="chart"><div className="chart-y"><span>10k</span><span>7.5k</span><span>5k</span><span>2.5k</span><span>0</span></div><div className="chart-plot"><div className="grid-lines"><i /><i /><i /><i /><i /></div><svg viewBox="0 0 520 180" preserveAspectRatio="none" aria-label="مخطط الإنتاج"><defs><linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#47d6a3" stopOpacity=".32" /><stop offset="100%" stopColor="#47d6a3" stopOpacity="0" /></linearGradient></defs><path d="M0,136 C28,126 46,126 70,112 S106,105 126,119 S160,88 180,92 S218,105 240,76 S270,62 292,83 S326,73 344,65 S376,44 398,59 S438,72 458,36 S492,48 520,22 L520,180 L0,180 Z" fill="url(#chartFill)" /><path d="M0,136 C28,126 46,126 70,112 S106,105 126,119 S160,88 180,92 S218,105 240,76 S270,62 292,83 S326,73 344,65 S376,44 398,59 S438,72 458,36 S492,48 520,22" fill="none" stroke="#47d6a3" strokeWidth="3" strokeLinecap="round" /></svg><div className="chart-x"><span>الإثنين</span><span>الثلاثاء</span><span>الأربعاء</span><span>الخميس</span><span>الجمعة</span><span>السبت</span><span>الأحد</span></div></div></div></div></section>

          <section className="lower-grid"><div className="panel glass-card inventory-panel"><div className="panel-heading"><div><h3>حالة المخزون</h3><p>آخر تحديث منذ 12 دقيقة</p></div><button className="filter-button" onClick={() => notify("تم تحديث بيانات المخزون")}><Filter size={15} /> تصفية</button></div><div className="inventory-table"><div className="table-row table-head"><span>الصنف</span><span>الكمية المتاحة</span><span>الحالة</span><span /></div>{filteredInventory.map((item) => <div className="table-row" key={item.name}><div className="item-cell"><div className={`stock-icon ${item.tone}`}><Warehouse size={17} /></div><div><b>{item.name}</b><small>{item.category}</small></div></div><div className="quantity"><b>{item.quantity}</b><small>{item.unit}</small></div><span className={`status-pill ${item.tone}`}><Circle size={7} fill="currentColor" />{item.status}</span><button className="item-more" aria-label={`خيارات ${item.name}`}><MoreHorizontal size={18} /></button></div>)}</div>{filteredInventory.length === 0 && <div className="empty-state">لم نجد أي صنف مطابق للبحث.</div>}<button className="table-footer" onClick={() => selectNav("المخزون")}>عرض جميع الأصناف <ArrowDownLeft size={15} /></button></div>
            <div className="side-stack"><div className="panel glass-card attendance-panel"><div className="panel-heading"><div><h3>الحضور اليوم</h3><p>آخر تسجيلات الدخول</p></div><button className="item-more"><MoreHorizontal size={18} /></button></div><div className="attendance-total"><div className="donut"><span>87<small>%</small></span></div><div><b>42 حاضر</b><small>من أصل 48 عامل</small><span className="attendance-up"><ArrowUpRight size={13} /> 3.2% من أمس</span></div></div><div className="worker-list">{workers.map((worker) => <div className="worker" key={worker.name}><div className={`worker-avatar ${worker.color}`}>{worker.initials}</div><div><b>{worker.name}</b><small>{worker.role}</small></div><span className={`worker-status ${worker.status === "متصل" ? "online" : "break"}`}><i />{worker.status}</span></div>)}</div><button className="table-footer" onClick={() => selectNav("العمال")}>عرض سجل الحضور <ArrowDownLeft size={15} /></button></div><div className="quick-card"><div className="quick-icon"><ClipboardList size={20} /></div><div><b>ملخص نهاية اليوم</b><span>جهّز تقرير العمليات في ثوانٍ</span></div><button onClick={() => notify("تم إنشاء ملخص نهاية اليوم")}><ArrowUpRight size={17} /></button></div></div></section>
        </div>
        <footer className="footer"><span>© 2026 مدار لإدارة العمليات</span><span><Activity size={14} /> كل الأنظمة تعمل بشكل جيد</span></footer>
      </main>

      {toast && <div className="toast"><CheckCircle2 size={18} /> {toast}</div>}
      {showTask && <div className="modal-backdrop" onClick={() => setShowTask(false)}><div className="task-modal" onClick={(e) => e.stopPropagation()}><button className="modal-close" onClick={() => setShowTask(false)}><X size={18} /></button><div className="modal-icon"><Plus size={21} /></div><h3>إضافة مهمة جديدة</h3><p>أنشئ مهمة لفريق الإنتاج أو المخزون.</p><label>اسم المهمة<input autoFocus placeholder="مثال: فحص خط التعبئة A" /></label><label>القسم<select defaultValue="production"><option value="production">الإنتاج</option><option value="inventory">المخزون</option><option value="workers">العمال</option></select></label><div className="modal-actions"><button className="secondary-button" onClick={() => setShowTask(false)}>إلغاء</button><button className="primary-button" onClick={() => { setShowTask(false); notify("تمت إضافة المهمة بنجاح"); }}>حفظ المهمة <CheckCircle2 size={16} /></button></div></div></div>}
    </div>
  );
}

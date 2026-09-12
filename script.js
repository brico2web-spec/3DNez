// Product Catalog
        const productsCatalog = [
            { code: "AC55", desc: "Acide Chlorithrique 17°", unit: "550 ml", qty: 30 },
            { code: "AC75", desc: "Acide Chlorithrique 17°", unit: "750 ml", qty: 20 },
            { code: "AC90", desc: "Acide Chlorithrique 17°", unit: "900 ml", qty: 20 },
            { code: "AC40", desc: "Acide Chlorithrique 17°", unit: "4 L", qty: 5 },
            { code: "DS1000", desc: "Detatrent Surpuissant FOX 90 CL", unit: "90 CL", qty: 20 },
            { code: "GZ1000", desc: "Grezyl 5%", unit: "1 L", qty: 20 },
            { code: "SCL1000", desc: "Saude Costique Liquide 1L", unit: "1 L", qty: 20 },
            { code: "ED1000", desc: "Eau Dèminéralisée - Special Batterie", unit: "1 L", qty: 20 },
            { code: "AS1000", desc: "Acide Chlorithrique 28°", unit: "1 L", qty: 20 },
            { code: "DL1000", desc: "Deboucheur Liquide 1L", unit: "1 L", qty: 20 },
            { code: "GR200", desc: "Garisse industriel", unit: "200 gm", qty: 24 },
            { code: "GR2500", desc: "Garisse industriel", unit: "2500 gm", qty: 1 },
            { code: "HL60", desc: "Huile de L'in", unit: "600 ml", qty: 30 },
            { code: "VB600", desc: "Vaseline de bois", unit: "600 ml", qty: 30 },

            { code: "W252", desc: "Essence SP 25 Cc", unit: "250 ml", qty: 60 },
            { code: "W552", desc: "Essence SP 55 Cc", unit: "550 ml", qty: 30 },
            { code: "W102", desc: "Essence AXA 90 Cc", unit: "1 L", qty: 20 },
            { code: "W202", desc: "Essence AXA 2L", unit: "2 L", qty: 11 },
            { code: "W402", desc: "Essence AXA 4L", unit: "4 L", qty: 5 },
            { code: "W251", desc: "Essence City 25 Cc", unit: "250 ml", qty: 60 },
            { code: "W551", desc: "Essence City 55 Cc", unit: "550 ml", qty: 30 },
            { code: "W101", desc: "Essence City 90 Cc", unit: "1 L", qty: 20 },
            { code: "W201", desc: "Essence City 2L", unit: "2 L", qty: 11 },
            { code: "W401", desc: "Essence City 4L", unit: "4 L", qty: 5 },
            { code: "J25", desc: "Jupiter 25 Cc", unit: "250 ml", qty: 60 },
            { code: "J55", desc: "Jupiter 55 Cc", unit: "550 ml", qty: 30 },

            { code: "D252", desc: "Diluant SP 25 Cc", unit: "250 ml", qty: 60 },
            { code: "D552", desc: "Diluant SP 55 Cc", unit: "550 ml", qty: 30 },
            { code: "D602", desc: "Diluant SP 60 CL", unit: "600 ml", qty: 30 },
            { code: "D102", desc: "Diluant AXA 90 Cc", unit: "1 L", qty: 20 },
            { code: "D202", desc: "Diluant AXA 2L", unit: "2 L", qty: 11 },
            { code: "D402", desc: "Diluant AXA 4L", unit: "4 L", qty: 5 },
            { code: "D251", desc: "Diluant City 25 Cc", unit: "250 ml", qty: 60 },
            { code: "D551", desc: "Diluant City 1éme 3/4", unit: "550 ml", qty: 30 },
            { code: "D601", desc: "Diluant City 1éme 60 CL", unit: "600 ml", qty: 30 },
            { code: "D101", desc: "Diluant City 90 Cc", unit: "1 L", qty: 20 },
            { code: "D201", desc: "Diluant City 2L", unit: "2 L", qty: 11 },
            { code: "D401", desc: "Diluant City 4L", unit: "4 L", qty: 5 },
            { code: "D603", desc: "Diluant XTRA 60 CL", unit: "600 ml", qty: 30 },
            { code: "D103", desc: "Diluant XTRA 90 CC", unit: "1 L", qty: 20 },
            { code: "D203", desc: "Diluant XTRA 2L", unit: "2 L", qty: 11 },
            { code: "D403", desc: "Diluant XTRA 4L", unit: "4 L", qty: 5 },
            { code: "DP600", desc: "Diluant PRO 600ml", unit: "600 ml", qty: 30 },
            { code: "DPMP900", desc: "Diluant PRO MAX 90cc", unit: "90 CL", qty: 20 },
            { code: "DPMP45", desc: "Diluant PRO MAX 4.5L", unit: "4.5 L", qty: 5 },
            { code: "D752-Z", desc: "Diluant SP 75 Cc Z", unit: "75 ml", qty: 25 },
            { code: "D752-P", desc: "Diluant SP 75 Cc P", unit: "75 ml", qty: 25 },
            { code: "D751-Z", desc: "Diluant CITY 75 Cc Z", unit: "75 ml", qty: 25 },
            { code: "D751-P", desc: "Diluant CITY 75 Cc P", unit: "75 ml", qty: 25 },
            { code: "D405", desc: "Diluant VOX Paint 4L", unit: "4 L", qty: 1 },

            { code: "CB250", desc: "Colle a Bois", unit: "250 gm", qty: 24 },
            { code: "CB500", desc: "Colle a Bois", unit: "550 gm", qty: 24 },
            { code: "CB4000", desc: "Colle a Bois", unit: "4 Kg", qty: 1 },
            { code: "CB20000", desc: "Colle a Bois", unit: "20 Kg", qty: 1 },
            { code: "FR1000", desc: "Colle FLIX Rouge", unit: "1 Kg", qty: 24 },
            { code: "FR5000", desc: "Colle FLIX Rouge", unit: "5 Kg", qty: 1 },
            { code: "FR20000", desc: "Colle FLIX Rouge", unit: "20 Kg", qty: 1 },
            { code: "FB1000", desc: "Colle FLIX Blanc", unit: "1 Kg", qty: 24 },
            { code: "FB5000", desc: "Colle FLIX Blanc", unit: "5 Kg", qty: 1 },
            { code: "FB20000", desc: "Colle FLIX Blanc", unit: "20 Kg", qty: 1 },
            { code: "SL500", desc: "Colle Grifi Sofalit", unit: "500 gm", qty: 24 },
            { code: "SL850", desc: "Colle Grifi Sofalit", unit: "850 gm", qty: 6 },
            { code: "CC250", desc: "Colle Grifi Sofalit", unit: "250 gm", qty: 1 },
            { code: "CC500", desc: "Colle Grifi Sofalit", unit: "500 gm", qty: 1 },
            { code: "CC1000", desc: "Colle Grifi Sofalit", unit: "1 Kg", qty: 1 },
            { code: "VF500", desc: "Colle Vit Fit", unit: "500 gm", qty: 24 },

            { code: "AP1000", desc: "Vinylique AXA Plast", unit: "1 Kg", qty: 24 },
            { code: "PVP1", desc: "Vinylique PVP Plast", unit: "1 Kg", qty: 24 },
            { code: "PVP10", desc: "Vinylique PVP Plast", unit: "1 Kg", qty: 24 },
            { code: "PVP100", desc: "Vinylique PVP Plast", unit: "1 Kg", qty: 24 },
            { code: "PVP1000", desc: "Vinylique PVP Plast", unit: "1 Kg", qty: 24 },
            { code: "SP5000", desc: "SOLTAN Plast", unit: "5 kg", qty: 1 },
            { code: "AP5000", desc: "Vinylique AXA Plast", unit: "5 Kg", qty: 1 },
            { code: "PVV1", desc: "Vinylique PVV Plast", unit: "5 kg", qty: 1 },
            { code: "PVV10", desc: "Vinylique PVV Plast", unit: "5 kg", qty: 1 },
            { code: "PVV100", desc: "Vinylique PVV Plast", unit: "5 kg", qty: 1 },
            { code: "PVV1000", desc: "Vinylique PVV Plast", unit: "5 kg", qty: 1 },
            { code: "PVC1", desc: "Vinylique PVC Plast", unit: "10 Kg", qty: 1 },
            { code: "PVC10", desc: "Vinylique PVC Plast", unit: "10 Kg", qty: 1 },
            { code: "PVC100", desc: "Vinylique PVC Plast", unit: "10 Kg", qty: 1 },
            { code: "PVC1000", desc: "Vinylique PVC Plast", unit: "10 Kg", qty: 1 },
            { code: "MP3000", desc: "MIMOSA AXA Plast", unit: "30Kg", qty: 1 },
            { code: "VL3000", desc: "VOX LATIX", unit: "30Kg", qty: 1 },
            { code: "CP3000", desc: "CITY PLAST", unit: "30Kg", qty: 1 },
            { code: "MP50000", desc: "MIMOSA AXA Plast", unit: "50 Kg", qty: 1 },
            { code: "SLBL4500", desc: "LACKY", unit: "4.5Kg", qty: 1 },
            { code: "AFG5000", desc: "LANTIROUI", unit: "5Kg", qty: 1 },
            { code: "AFR5000", desc: "LANTIROUI", unit: "5Kg", qty: 1 }
        ];

        let productionLogs = JSON.parse(localStorage.getItem('factory_production')) || [
            { id: 1, date: new Date().toISOString().split('T')[0], worker: "أحمد العمراني", code: "AC55", desc: "Acide Chlorithrique 17°", unit: "550 ml", qty: 30, notes: "دفعة الصباح" },
            { id: 2, date: new Date().toISOString().split('T')[0], worker: "محمد العلوي", code: "W252", desc: "Essence SP 25 Cc", unit: "250 ml", qty: 60, notes: "ممتاز" }
        ];

        let stockOutLogs = JSON.parse(localStorage.getItem('factory_stock_out')) || [
            { id: 1, date: new Date().toISOString().split('T')[0], code: "AC55", desc: "Acide Chlorithrique 17°", unit: "550 ml", qty: 10, notes: "دفعة خام واردة بتاريخ اليوم" }
        ];

        let workersList = JSON.parse(localStorage.getItem('factory_workers_list')) || [
            { name: "أحمد العمراني", phone: "0612345678" },
            { name: "محمد العلوي", phone: "0623456789" },
            { name: "يوسف بنصالح", phone: "0634567890" },
            { name: "كريم الإدريسي", phone: "0645678901" },
            { name: "رشيد التازي", phone: "0656789012" },
            { name: "مصطفى بوكري", phone: "0667890123" }
        ];

        // Attendance Logs Storage: { "YYYY-MM-DD": { "Worker Name": "حاضر" | "مريض" | ... } }
        let attendanceLogs = JSON.parse(localStorage.getItem('factory_attendance_logs')) || {};
        let currentAnalyticsMode = 'weekly';

        window.onload = function() {
            const todayStr = new Date().toISOString().split('T')[0];
            document.getElementById('current-date').innerText = "التاريخ: " + todayStr;
            document.getElementById('prod-date').value = todayStr;
            document.getElementById('out-date').value = todayStr;
            document.getElementById('filter-date').value = todayStr;
            document.getElementById('attendance-date').value = todayStr;

            populateProductDropdowns();
            updateWorkersDropdown();
            renderSavedAttendanceButtons();
            renderAll();
        };

        // Dropdown Menu Functions
        function toggleMenu() {
            const menu = document.getElementById('dropdown-menu');
            menu.classList.toggle('hidden');
        }

        window.addEventListener('click', function(e) {
            const btn = document.getElementById('menu-toggle-btn');
            const menu = document.getElementById('dropdown-menu');
            if (!btn.contains(e.target) && !menu.contains(e.target)) {
                menu.classList.add('hidden');
            }
        });

        function selectTab(tabId, title) {
            document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
            document.getElementById(tabId).classList.add('active');
            document.getElementById('current-tab-title').innerText = title;
            document.getElementById('dropdown-menu').classList.add('hidden');
            window.scrollTo({ top: 0, behavior: 'smooth' });

            if(tabId === 'attendance') {
                renderAttendanceTable();
                renderSavedAttendanceButtons();
            }
            if(tabId === 'analytics') {
                renderAnalytics();
            }
        }

        function populateProductDropdowns() {
            const list1 = document.getElementById('products-datalist');
            const list2 = document.getElementById('out-products-datalist');
            
            list1.innerHTML = '';
            list2.innerHTML = '';

            productsCatalog.forEach(p => {
                const optText = `${p.code} - ${p.desc} (${p.unit})`;
                
                const opt1 = document.createElement('option');
                opt1.value = optText;
                list1.appendChild(opt1);

                const opt2 = document.createElement('option');
                opt2.value = optText;
                list2.appendChild(opt2);
            });
        }

        function updateWorkersDropdown() {
            const select = document.getElementById('worker-name');
            select.innerHTML = '<option value="">-- اختر العامل --</option>';
            workersList.forEach(w => {
                select.innerHTML += `<option value="${w.name}">${w.name}</option>`;
            });
        }

        function getCurrentStock(code) {
            const product = productsCatalog.find(p => p.code === code);
            const initial = product ? product.qty : 0;
            const produced = productionLogs.filter(item => item.code === code).reduce((sum, item) => sum + item.qty, 0);
            const out = stockOutLogs.filter(item => item.code === code).reduce((sum, item) => sum + item.qty, 0);
            return initial + produced - out;
        }

        // Production Form Submit
        function handleProductionSubmit(event) {
            event.preventDefault();
            const worker = document.getElementById('worker-name').value;
            const rawProductVal = document.getElementById('product-search-input').value;
            const code = rawProductVal.split(' - ')[0].trim();
            const quantity = parseInt(document.getElementById('prod-quantity').value);
            const date = document.getElementById('prod-date').value;
            const notes = document.getElementById('prod-notes').value;

            const productObj = productsCatalog.find(p => p.code === code);
            if (!productObj) {
                alert('الرجاء اختيار منتج صحيح من القائمة المقترحة!');
                return;
            }

            const newEntry = {
                id: Date.now(),
                date: date,
                worker: worker,
                code: productObj.code,
                desc: productObj.desc,
                unit: productObj.unit,
                qty: quantity,
                notes: notes
            };

            productionLogs.unshift(newEntry);
            localStorage.setItem('factory_production', JSON.stringify(productionLogs));

            document.getElementById('production-form').reset();
            document.getElementById('prod-date').value = new Date().toISOString().split('T')[0];

            renderAll();
            selectTab('workers', 'تقارير العمال اليومية');
            alert('تم تسجيل الإنتاج بنجاح وإضافته للمخزون!');
        }

        // Attendance Management Functions
        function renderAttendanceTable() {
            const dateStr = document.getElementById('attendance-date').value;
            const tbody = document.getElementById('attendance-tbody');
            tbody.innerHTML = '';

            if (workersList.length === 0) {
                tbody.innerHTML = `<tr><td colspan="4" class="p-6 text-center text-slate-400">لا يوجد عمال مسجلين بدليل العمال</td></tr>`;
                return;
            }

            const dayRecords = attendanceLogs[dateStr] || {};

            workersList.forEach((w, index) => {
                const currentStatus = dayRecords[w.name] || 'حاضر';
                tbody.innerHTML += `
                    <tr class="hover:bg-slate-50 transition">
                        <td class="p-3 text-slate-500 font-mono">${index + 1}</td>
                        <td class="p-3 font-bold text-slate-800">${w.name}</td>
                        <td class="p-3 font-mono text-emerald-700 font-semibold" dir="ltr">${w.phone}</td>
                        <td class="p-3">
                            <select id="attendance_select_${index}" class="p-2.5 border border-slate-300 rounded-xl text-sm font-semibold focus:ring-2 focus:ring-indigo-500 focus:outline-none w-full sm:w-48 bg-white">
                                <option value="حاضر" ${currentStatus === 'حاضر' ? 'selected' : ''} class="text-emerald-700 font-semibold">حاضر</option>
                                <option value="مريض" ${currentStatus === 'مريض' ? 'selected' : ''} class="text-rose-600 font-semibold">مريض</option>
                                <option value="غير مبرر" ${currentStatus === 'غير مبرر' ? 'selected' : ''} class="text-amber-600 font-semibold">غير مبرر</option>
                                <option value="مسألة خاصة" ${currentStatus === 'مسألة خاصة' ? 'selected' : ''} class="text-blue-600 font-semibold">مسألة خاصة</option>
                                <option value="إستقل" ${currentStatus === 'إستقل' ? 'selected' : ''} class="text-slate-600 font-semibold">إستقل</option>
                            </select>
                        </td>
                    </tr>
                `;
            });
        }

        function handleAttendanceSubmit(event) {
            event.preventDefault();
            const dateStr = document.getElementById('attendance-date').value;
            if(!dateStr) {
                alert('الرجاء تحديد تاريخ الحضور!');
                return;
            }

            if(!attendanceLogs[dateStr]) {
                attendanceLogs[dateStr] = {};
            }

            workersList.forEach((w, index) => {
                const selectElem = document.getElementById(`attendance_select_${index}`);
                if (selectElem) {
                    attendanceLogs[dateStr][w.name] = selectElem.value;
                }
            });

            localStorage.setItem('factory_attendance_logs', JSON.stringify(attendanceLogs));
            renderSavedAttendanceButtons(); // Render the date button below
            alert('تم حفظ سجل حضور العمال بنجاح لتاريخ: ' + dateStr);
        }

        // Render Saved Attendance Date Buttons
        function renderSavedAttendanceButtons() {
            const container = document.getElementById('saved-attendance-buttons');
            if (!container) return;
            container.innerHTML = '';

            const savedDates = Object.keys(attendanceLogs).sort().reverse();
            if (savedDates.length === 0) {
                container.innerHTML = `<p class="text-xs text-slate-400">لا توجد تواريخ حضور محفوظة بعد.</p>`;
                return;
            }

            savedDates.forEach(dateStr => {
                const btn = document.createElement('button');
                btn.type = 'button';
                btn.className = "bg-slate-800 hover:bg-slate-900 text-white px-4 py-2.5 rounded-xl text-sm font-bold transition shadow flex items-center gap-2 border border-slate-700";
                btn.innerHTML = `<i class="fa-solid fa-calendar-day text-indigo-400"></i> ${dateStr}`;
                btn.onclick = () => openAttendanceModal(dateStr);
                container.appendChild(btn);
            });
        }

        // Open Modal with Attendance Details for Specific Date
        function openAttendanceModal(dateStr) {
            document.getElementById('attendance-modal-title').innerHTML = `<i class="fa-solid fa-calendar-day text-indigo-600"></i> تفاصيل الحضور ليوم: ${dateStr}`;
            const tbody = document.getElementById('attendance-modal-tbody');
            tbody.innerHTML = '';

            const dayRecords = attendanceLogs[dateStr] || {};
            if (workersList.length === 0) {
                tbody.innerHTML = `<tr><td colspan="3" class="p-6 text-center text-slate-400">لا يوجد عمال مسجلين</td></tr>`;
            } else {
                workersList.forEach(w => {
                    const status = dayRecords[w.name] || 'غير مسجل';
                    let statusBadgeClass = 'bg-slate-100 text-slate-700';
                    if (status === 'حاضر') statusBadgeClass = 'bg-emerald-100 text-emerald-800 font-bold';
                    else if (status === 'مريض') statusBadgeClass = 'bg-rose-100 text-rose-800 font-bold';
                    else if (status === 'غير مبرر') statusBadgeClass = 'bg-amber-100 text-amber-800 font-bold';
                    else if (status === 'مسألة خاصة') statusBadgeClass = 'bg-blue-100 text-blue-800 font-bold';
                    else if (status === 'إستقل') statusBadgeClass = 'bg-slate-200 text-slate-700 font-bold';

                    tbody.innerHTML += `
                        <tr class="hover:bg-slate-50 transition">
                            <td class="p-3 font-bold text-slate-800">${w.name}</td>
                            <td class="p-3 font-mono text-emerald-700 font-semibold" dir="ltr">${w.phone}</td>
                            <td class="p-3"><span class="px-3 py-1 rounded-full text-xs ${statusBadgeClass}">${status}</span></td>
                        </tr>
                    `;
                });
            }

            document.getElementById('attendance-detail-modal').classList.remove('hidden');
        }

        function closeAttendanceModal() {
            document.getElementById('attendance-detail-modal').classList.add('hidden');
        }

        // Stock Out Submit
        function handleStockOutSubmit(event) {
            event.preventDefault();
            const rawProductVal = document.getElementById('out-product-search-input').value;
            const code = rawProductVal.split(' - ')[0].trim();
            const quantity = parseInt(document.getElementById('out-quantity').value);
            const date = document.getElementById('out-date').value;
            const notes = document.getElementById('out-notes').value;

            const productObj = productsCatalog.find(p => p.code === code);
            if (!productObj) {
                alert('الرجاء اختيار منتج صحيح من القائمة المقترحة!');
                return;
            }

            const currentStock = getCurrentStock(code);
            if (quantity > currentStock) {
                alert(`تنبيه: الكمية المطلوبة (${quantity}) أكبر من المخزون الحالي المتاح (${currentStock})!`);
                return;
            }

            const newOutEntry = {
                id: Date.now(),
                date: date,
                code: productObj.code,
                desc: productObj.desc,
                unit: productObj.unit,
                qty: quantity,
                notes: notes
            };

            stockOutLogs.unshift(newOutEntry);
            localStorage.setItem('factory_stock_out', JSON.stringify(stockOutLogs));

            document.getElementById('stockout-form').reset();
            document.getElementById('out-date').value = new Date().toISOString().split('T')[0];

            renderAll();
            alert('تم تسجيل خروج المنتجات وتحديث المخزون بنجاح!');
        }

        function deleteEntry(id) {
            if (confirm('هل أنت متأكد من حذف هذا السجل؟')) {
                productionLogs = productionLogs.filter(item => item.id !== id);
                localStorage.setItem('factory_production', JSON.stringify(productionLogs));
                renderAll();
            }
        }

        function deleteStockOutEntry(id) {
            if (confirm('هل أنت متأكد من حذف سجل الخروج هذا؟')) {
                stockOutLogs = stockOutLogs.filter(item => item.id !== id);
                localStorage.setItem('factory_stock_out', JSON.stringify(stockOutLogs));
                renderAll();
            }
        }

        function clearAllProduction() {
            if (confirm('تحذير: سيتم مسح جميع سجلات الإنتاج!')) {
                productionLogs = [];
                localStorage.setItem('factory_production', JSON.stringify(productionLogs));
                renderAll();
            }
        }

        function clearAllStockOut() {
            if (confirm('تحذير: سيتم مسح جميع سجلات خروج المنتجات!')) {
                stockOutLogs = [];
                localStorage.setItem('factory_stock_out', JSON.stringify(stockOutLogs));
                renderAll();
            }
        }

        // Workers Directory Management Functions
        function openAddWorkerModal() {
            document.getElementById('modal-title').innerText = "إضافة عامل جديد";
            document.getElementById('worker-edit-index').value = "-1";
            document.getElementById('modal-worker-name').value = "";
            document.getElementById('modal-worker-phone').value = "";
            document.getElementById('worker-modal').classList.remove('hidden');
        }

        function editWorker(index) {
            const worker = workersList[index];
            document.getElementById('modal-title').innerText = "تعديل بيانات العامل";
            document.getElementById('worker-edit-index').value = index;
            document.getElementById('modal-worker-name').value = worker.name;
            document.getElementById('modal-worker-phone').value = worker.phone;
            document.getElementById('worker-modal').classList.remove('hidden');
        }

        function closeWorkerModal() {
            document.getElementById('worker-modal').classList.add('hidden');
        }

        function handleWorkerSave(event) {
            event.preventDefault();
            const index = parseInt(document.getElementById('worker-edit-index').value);
            const name = document.getElementById('modal-worker-name').value.trim();
            const phone = document.getElementById('modal-worker-phone').value.trim();

            if (index === -1) {
                workersList.push({ name, phone });
            } else {
                workersList[index] = { name, phone };
            }

            localStorage.setItem('factory_workers_list', JSON.stringify(workersList));
            updateWorkersDropdown();
            renderWorkersInfoTable();
            closeWorkerModal();
            alert('تم حفظ بيانات العامل بنجاح!');
        }

        function deleteWorker(index) {
            if (confirm('هل أنت متأكد من حذف هذا العامل من الدليل؟')) {
                workersList.splice(index, 1);
                localStorage.setItem('factory_workers_list', JSON.stringify(workersList));
                updateWorkersDropdown();
                renderWorkersInfoTable();
            }
        }

        // Helper date grouping functions for Analytics
        function getWeekIdentifier(dateStr) {
            const d = new Date(dateStr);
            d.setHours(0, 0, 0, 0);
            d.setDate(d.getDate() + 4 - (d.getDay() || 7));
            const yearStart = new Date(d.getFullYear(), 0, 1);
            const weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
            return `${d.getFullYear()}-أسبوع ${weekNo}`;
        }

        function getMonthIdentifier(dateStr) {
            if (!dateStr) return '';
            return dateStr.substring(0, 7);
        }

        function setAnalyticsView(mode) {
            currentAnalyticsMode = mode;
            const btnW = document.getElementById('btn-view-weekly');
            const btnM = document.getElementById('btn-view-monthly');
            if (mode === 'weekly') {
                btnW.className = "px-4 py-2 rounded-xl text-sm font-bold bg-teal-600 text-white transition shadow";
                btnM.className = "px-4 py-2 rounded-xl text-sm font-bold bg-slate-200 text-slate-700 transition";
            } else {
                btnM.className = "px-4 py-2 rounded-xl text-sm font-bold bg-teal-600 text-white transition shadow";
                btnW.className = "px-4 py-2 rounded-xl text-sm font-bold bg-slate-200 text-slate-700 transition";
            }
            renderAnalytics();
        }

        function renderAnalytics() {
            const container = document.getElementById('analytics-content');
            container.innerHTML = '';

            const prodGroups = {};
            const stockOutGroups = {};

            productionLogs.forEach(item => {
                const key = currentAnalyticsMode === 'weekly' ? getWeekIdentifier(item.date) : getMonthIdentifier(item.date);
                if (!prodGroups[key]) prodGroups[key] = { totalQty: 0, workers: {}, products: {} };
                prodGroups[key].totalQty += item.qty;

                if (!prodGroups[key].workers[item.worker]) prodGroups[key].workers[item.worker] = 0;
                prodGroups[key].workers[item.worker] += item.qty;

                if (!prodGroups[key].products[item.code]) {
                    prodGroups[key].products[item.code] = { desc: item.desc, unit: item.unit, qty: 0 };
                }
                prodGroups[key].products[item.code].qty += item.qty;
            });

            stockOutLogs.forEach(item => {
                const key = currentAnalyticsMode === 'weekly' ? getWeekIdentifier(item.date) : getMonthIdentifier(item.date);
                if (!stockOutGroups[key]) stockOutGroups[key] = {};
                if (!stockOutGroups[key][item.code]) {
                    stockOutGroups[key][item.code] = { desc: item.desc, unit: item.unit, qty: 0 };
                }
                stockOutGroups[key][item.code].qty += item.qty;
            });

            const allPeriods = Array.from(new Set([...Object.keys(prodGroups), ...Object.keys(stockOutGroups)])).sort().reverse();

            if (allPeriods.length === 0) {
                container.innerHTML = `<p class="text-center text-slate-400 py-8">لا توجد بيانات كافية لعرض التحليل الإحصائي حالياً.</p>`;
                return;
            }

            allPeriods.forEach(period => {
                const pData = prodGroups[period] || { totalQty: 0, workers: {}, products: {} };
                const sData = stockOutGroups[period] || {};

                let workersHtml = '';
                for (const [wName, wQty] of Object.entries(pData.workers)) {
                    workersHtml += `<li class="flex justify-between py-1 border-b border-slate-100 text-xs"><span class="font-bold text-slate-700">${wName}</span> <span class="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold">${wQty} وحدة</span></li>`;
                }
                if(workersHtml === '') workersHtml = `<li class="text-xs text-slate-400">لا يوجد إنتاج مسجل</li>`;

                let consumedHtml = '';
                for (const [cCode, cObj] of Object.entries(sData)) {
                    consumedHtml += `
                        <tr class="hover:bg-slate-50 text-xs">
                            <td class="p-2 font-mono font-bold text-rose-600">${cCode}</td>
                            <td class="p-2 text-slate-700">${cObj.desc}</td>
                            <td class="p-2 text-slate-500">${cObj.unit}</td>
                            <td class="p-2"><span class="bg-rose-100 text-rose-800 px-2 py-0.5 rounded font-bold">${cObj.qty}</span></td>
                        </tr>
                    `;
                }
                if(consumedHtml === '') consumedHtml = `<tr><td colspan="4" class="p-3 text-center text-xs text-slate-400">لا توجد منتجات مستهلكة/مصروفة في هذه الفترة</td></tr>`;

                container.innerHTML += `
                    <div class="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-4 shadow-sm">
                        <div class="flex justify-between items-center bg-teal-900 text-white px-4 py-3 rounded-xl flex-wrap gap-2">
                            <h3 class="font-bold text-sm sm:text-base flex items-center gap-2">
                                <i class="fa-solid fa-calendar-days text-teal-400"></i> فترة التقرير: ${period}
                            </h3>
                            <span class="bg-teal-700 text-white text-xs px-3 py-1 rounded-lg font-bold">إجمالي الإنتاج: ${pData.totalQty} وحدة</span>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <!-- Workers Production Analysis -->
                            <div class="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
                                <h4 class="font-bold text-slate-800 text-sm flex items-center gap-2 border-b pb-2">
                                    <i class="fa-solid fa-users text-emerald-600"></i> إنتاج العمال خلال هذه الفترة
                                </h4>
                                <ul class="space-y-1 max-h-48 overflow-y-auto">
                                    ${workersHtml}
                                </ul>
                            </div>

                            <!-- Consumed / Out Products Analysis -->
                            <div class="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
                                <h4 class="font-bold text-slate-800 text-sm flex items-center gap-2 border-b pb-2">
                                    <i class="fa-solid fa-box-open text-rose-600"></i> المنتجات المستهلكة/المصروفة وكمياتها
                                </h4>
                                <div class="overflow-x-auto max-h-48 overflow-y-auto">
                                    <table class="w-full text-right">
                                        <thead class="bg-slate-100 text-slate-600 text-xs">
                                            <tr>
                                                <th class="p-2">الكود</th>
                                                <th class="p-2">المنتج</th>
                                                <th class="p-2">الوحدة</th>
                                                <th class="p-2">كمية الاستهلاك</th>
                                            </tr>
                                        </thead>
                                        <tbody class="divide-y divide-slate-100">
                                            ${consumedHtml}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            });
        }

        // Render All Tables
        function renderAll() {
            renderDashboardStats();
            renderLowStockTable();
            renderProductionTable();
            renderStockOutTable();
            renderInventoryTable();
            renderWorkersInfoTable();
        }

        function updateKpiCards() {
            const today = new Date().toISOString().split('T')[0];
            const todayTotal = productionLogs.filter(x => x.date === today).reduce((s,x) => s + Number(x.qty || 0), 0);
            const low = productsCatalog.filter(p => getCurrentStock(p.code) <= 5).length;
            const set = (id, value) => { const el = document.getElementById(id); if (el) el.textContent = value; };
            set('kpi-products', productsCatalog.length); set('kpi-workers', workersList.length); set('kpi-production', todayTotal); set('kpi-low-stock', low);
        }

        function renderDashboardStats() {
            updateKpiCards();
            const recentOutTbody = document.getElementById('recent-out-table');
            recentOutTbody.innerHTML = '';
            if (stockOutLogs.length === 0) {
                recentOutTbody.innerHTML = `<tr><td colspan="3" class="p-4 text-center text-slate-400">لا توجد عمليات خروج مسجلة بعد</td></tr>`;
            } else {
                stockOutLogs.slice(0, 5).forEach(item => {
                    recentOutTbody.innerHTML += `
                        <tr class="hover:bg-slate-50">
                            <td class="p-3 text-slate-700 font-medium">${item.code} - ${item.desc}</td>
                            <td class="p-3"><span class="bg-rose-100 text-rose-800 px-2 py-0.5 rounded font-bold">${item.qty} (${item.unit})</span></td>
                            <td class="p-3 text-slate-400 text-xs">${item.date}</td>
                        </tr>
                    `;
                });
            }

            const summaryDiv = document.getElementById('workers-summary-dash');
            summaryDiv.innerHTML = '';
            
            const todayStr = new Date().toISOString().split('T')[0];
            const todayLogs = productionLogs.filter(item => item.date === todayStr);
            const workerMap = {};
            todayLogs.forEach(item => {
                if (!workerMap[item.worker]) workerMap[item.worker] = 0;
                workerMap[item.worker] += item.qty;
            });

            if (Object.keys(workerMap).length === 0) {
                summaryDiv.innerHTML = `<p class="text-slate-400 text-sm text-center py-4">لا يوجد إنتاج مسجل اليوم حتى الآن</p>`;
            } else {
                for (const [worker, totalQty] of Object.entries(workerMap)) {
                    summaryDiv.innerHTML += `
                        <div class="flex justify-between items-center p-3 bg-slate-50 rounded-xl border border-slate-100">
                            <span class="font-bold text-slate-700 flex items-center gap-2"><i class="fa-solid fa-user text-emerald-600"></i> ${worker}</span>
                            <span class="bg-slate-900 text-white px-3 py-1 rounded-lg text-xs font-bold">${totalQty} وحدة منتجة اليوم</span>
                        </div>
                    `;
                }
            }
        }

        function renderLowStockTable() {
            const tbody = document.getElementById('low-stock-table');
            tbody.innerHTML = '';

            const lowStockItems = productsCatalog.filter(p => getCurrentStock(p.code) <= 5);
            document.getElementById('low-stock-count').innerText = `${lowStockItems.length} منتج`;

            if (lowStockItems.length === 0) {
                tbody.innerHTML = `<tr><td colspan="4" class="p-4 text-center text-emerald-600 font-semibold">ممتاز! لا توجد منتجات منخفضة المخزون حالياً.</td></tr>`;
                return;
            }

            lowStockItems.forEach(p => {
                const current = getCurrentStock(p.code);
                tbody.innerHTML += `
                    <tr class="hover:bg-rose-50/50">
                        <td class="p-3 font-mono font-bold text-slate-800">${p.code}</td>
                        <td class="p-3 text-slate-700 font-medium">${p.desc}</td>
                        <td class="p-3 text-slate-500">${p.unit}</td>
                        <td class="p-3"><span class="bg-rose-100 text-rose-800 px-2.5 py-1 rounded-lg font-bold">${current}</span></td>
                    </tr>
                `;
            });
        }

        function renderProductionTable() {
            const filterDate = document.getElementById('filter-date').value;
            const tbody = document.getElementById('full-production-table');
            tbody.innerHTML = '';

            const filteredLogs = filterDate ? productionLogs.filter(item => item.date === filterDate) : productionLogs;

            if (filteredLogs.length === 0) {
                tbody.innerHTML = `<tr><td colspan="8" class="p-6 text-center text-slate-400">لا توجد سجلات إنتاج مطابقة لتاريخ اليوم المحدد</td></tr>`;
                return;
            }

            filteredLogs.forEach(item => {
                tbody.innerHTML += `
                    <tr class="hover:bg-slate-50 transition">
                        <td class="p-3 text-slate-600 font-mono">${item.date}</td>
                        <td class="p-3 font-bold text-slate-800">${item.worker}</td>
                        <td class="p-3 font-mono font-semibold text-emerald-600">${item.code}</td>
                        <td class="p-3 text-slate-700">${item.desc}</td>
                        <td class="p-3 text-slate-500">${item.unit}</td>
                        <td class="p-3"><span class="bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-lg font-bold">${item.qty}</span></td>
                        <td class="p-3 text-slate-500 text-xs">${item.notes || '-'}</td>
                        <td class="p-3 text-center">
                            <button onclick="deleteEntry(${item.id})" class="text-red-500 hover:text-red-700 p-1.5 rounded-lg hover:bg-red-50 transition" title="حذف">
                                <i class="fa-solid fa-trash"></i>
                            </button>
                        </td>
                    </tr>
                `;
            });
        }

        function renderStockOutTable() {
            const tbody = document.getElementById('full-stockout-table');
            tbody.innerHTML = '';

            if (stockOutLogs.length === 0) {
                tbody.innerHTML = `<tr><td colspan="6" class="p-6 text-center text-slate-400">لا توجد حركات خروج مسجلة حتى الآن</td></tr>`;
                return;
            }

            stockOutLogs.forEach(item => {
                tbody.innerHTML += `
                    <tr class="hover:bg-slate-50 transition">
                        <td class="p-3 text-slate-600 font-mono">${item.date}</td>
                        <td class="p-3 font-mono font-semibold text-rose-600">${item.code}</td>
                        <td class="p-3 text-slate-700">${item.desc} (${item.unit})</td>
                        <td class="p-3"><span class="bg-rose-100 text-rose-800 px-2.5 py-1 rounded-lg font-bold">${item.qty}</span></td>
                        <td class="p-3 text-slate-600 text-xs font-medium">${item.notes || '-'}</td>
                        <td class="p-3 text-center">
                            <button onclick="deleteStockOutEntry(${item.id})" class="text-red-500 hover:text-red-700 p-1.5 rounded-lg hover:bg-red-50 transition" title="حذف">
                                <i class="fa-solid fa-trash"></i>
                            </button>
                        </td>
                    </tr>
                `;
            });
        }

        function renderInventoryTable() {
            const tbody = document.getElementById('inventory-tbody');
            tbody.innerHTML = '';

            const prodTotals = {};
            productionLogs.forEach(item => {
                if (!prodTotals[item.code]) prodTotals[item.code] = 0;
                prodTotals[item.code] += item.qty;
            });

            const outTotals = {};
            stockOutLogs.forEach(item => {
                if (!outTotals[item.code]) outTotals[item.code] = 0;
                outTotals[item.code] += item.qty;
            });

            productsCatalog.forEach(p => {
                const produced = prodTotals[p.code] || 0;
                const out = outTotals[p.code] || 0;
                const currentStock = p.qty + produced - out;
                
                let statusBadge = `<span class="bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full text-xs font-bold">متوفر</span>`;
                if (currentStock <= 5) {
                    statusBadge = `<span class="bg-rose-100 text-rose-800 px-2.5 py-1 rounded-full text-xs font-bold">منخفض جداً</span>`;
                }

                tbody.innerHTML += `
                    <tr class="hover:bg-slate-50 transition inventory-row" data-search="${p.code.toLowerCase()} ${p.desc.toLowerCase()}">
                        <td class="p-3 font-mono font-bold text-slate-800">${p.code}</td>
                        <td class="p-3 text-slate-700 font-medium">${p.desc}</td>
                        <td class="p-3 text-slate-500">${p.unit}</td>
                        <td class="p-3 font-semibold text-slate-600">${p.qty}</td>
                        <td class="p-3"><span class="bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-lg font-bold">${produced}</span></td>
                        <td class="p-3"><span class="bg-rose-50 text-rose-700 px-2.5 py-1 rounded-lg font-bold">${out}</span></td>
                        <td class="p-3"><span class="bg-slate-900 text-white px-3 py-1 rounded-lg font-black">${currentStock}</span></td>
                        <td class="p-3">${statusBadge}</td>
                    </tr>
                `;
            });
        }

        function renderWorkersInfoTable() {
            const tbody = document.getElementById('workers-info-tbody');
            tbody.innerHTML = '';

            if (workersList.length === 0) {
                tbody.innerHTML = `<tr><td colspan="4" class="p-6 text-center text-slate-400">لا يوجد عمال مسجلين حالياً</td></tr>`;
                return;
            }

            workersList.forEach((w, index) => {
                tbody.innerHTML += `
                    <tr class="hover:bg-slate-50 transition">
                        <td class="p-3 text-slate-500 font-mono">${index + 1}</td>
                        <td class="p-3 font-bold text-slate-800">${w.name}</td>
                        <td class="p-3 font-mono text-emerald-700 font-semibold" dir="ltr">${w.phone}</td>
                        <td class="p-3 text-center space-x-2 space-x-reverse">
                            <button onclick="editWorker(${index})" class="text-blue-500 hover:text-blue-700 p-1.5 rounded-lg hover:bg-blue-50 transition" title="تعديل">
                                <i class="fa-solid fa-pen-to-square"></i>
                            </button>
                            <button onclick="deleteWorker(${index})" class="text-red-500 hover:text-red-700 p-1.5 rounded-lg hover:bg-red-50 transition" title="حذف">
                                <i class="fa-solid fa-trash"></i>
                            </button>
                        </td>
                    </tr>
                `;
            });
        }

        function filterInventory() {
            const query = document.getElementById('search-product').value.toLowerCase();
            const rows = document.querySelectorAll('.inventory-row');
            rows.forEach(row => {
                const text = row.getAttribute('data-search');
                if (text.includes(query)) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
        }

        // ================= EXCEL EXPORT FUNCTIONS =================
        function downloadCSV(csvContent, filename) {
            const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.setAttribute("href", url);
            link.setAttribute("download", filename);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        }

        // 1. تصدير التقرير الشامل (من الأعلى)
        function exportData() {
            let csvContent = "\uFEFFType,Date,Code,Description,Unit,Quantity,Notes\n";
            productionLogs.forEach(row => {
                csvContent += `Production,${row.date},"${row.code}","${row.desc}","${row.unit}",${row.qty},"${row.notes || ''}"\n`;
            });
            stockOutLogs.forEach(row => {
                csvContent += `StockOut,${row.date},"${row.code}","${row.desc}","${row.unit}",${row.qty},"${row.notes || ''}"\n`;
            });
            downloadCSV(csvContent, "factory_complete_report.csv");
        }

        // 2. تصدير تنبيهات المخزون المنخفض
        function exportLowStockExcel() {
            let csvContent = "\uFEFFالكود,وصف المنتج,الوحدة,المخزون الحالي\n";
            const lowStockItems = productsCatalog.filter(p => getCurrentStock(p.code) <= 5);
            lowStockItems.forEach(p => {
                csvContent += `"${p.code}","${p.desc}","${p.unit}",${getCurrentStock(p.code)}\n`;
            });
            downloadCSV(csvContent, "low_stock_report.csv");
        }

        // 3. تصدير الحضور اليومي
        function exportAttendanceExcel() {
            const dateStr = document.getElementById('attendance-date').value;
            const dayRecords = attendanceLogs[dateStr] || {};
            let csvContent = "\uFEFFرقم,اسم العامل,رقم الهاتف,الحالة اليومية\n";
            workersList.forEach((w, index) => {
                const status = dayRecords[w.name] || 'حاضر';
                csvContent += `${index + 1},"${w.name}","${w.phone}","${status}"\n`;
            });
            downloadCSV(csvContent, `attendance_${dateStr}.csv`);
        }

        // 4. تصدير سجل خروج المنتجات (الصرف)
        function exportStockOutExcel() {
            let csvContent = "\uFEFFالتاريخ,كود المنتج,الوصف,الوحدة,الكمية,الملاحظات / الوارد الخام\n";
            stockOutLogs.forEach(item => {
                csvContent += `${item.date},"${item.code}","${item.desc}","${item.unit}",${item.qty},"${item.notes || ''}"\n`;
            });
            downloadCSV(csvContent, "stock_out_report.csv");
        }

        // 5. تصدير تقارير إنتاج العمال اليومية
        function exportProductionExcel() {
            const filterDate = document.getElementById('filter-date').value;
            const filteredLogs = filterDate ? productionLogs.filter(item => item.date === filterDate) : productionLogs;
            let csvContent = "\uFEFFالتاريخ,اسم العامل,كود المنتج,الوصف,الوحدة,الكمية,ملاحظات\n";
            filteredLogs.forEach(item => {
                csvContent += `${item.date},"${item.worker}","${item.code}","${item.desc}","${item.unit}",${item.qty},"${item.notes || ''}"\n`;
            });
            downloadCSV(csvContent, `workers_production_${filterDate || 'all'}.csv`);
        }

        // 6. تصدير المخزون الكلي للمنتجات
        function exportInventoryExcel() {
            let csvContent = "\uFEFFالكود,وصف المنتج,الوحدة,الافتراضي,المُنتَج,المُصَرَف,المخزون الحالي,الحالة\n";
            const prodTotals = {};
            productionLogs.forEach(item => {
                if (!prodTotals[item.code]) prodTotals[item.code] = 0;
                prodTotals[item.code] += item.qty;
            });
            const outTotals = {};
            stockOutLogs.forEach(item => {
                if (!outTotals[item.code]) outTotals[item.code] = 0;
                outTotals[item.code] += item.qty;
            });
            productsCatalog.forEach(p => {
                const produced = prodTotals[p.code] || 0;
                const out = outTotals[p.code] || 0;
                const currentStock = p.qty + produced - out;
                const status = currentStock <= 5 ? "منخفض جداً" : "متوفر";
                csvContent += `"${p.code}","${p.desc}","${p.unit}",${p.qty},${produced},${out},${currentStock},"${status}"\n`;
            });
            downloadCSV(csvContent, "inventory_report.csv");
        }

        // 7. تصدير التحليل المبياني (أسبوعي / شهري)
        function exportAnalyticsExcel() {
            let csvContent = `\uFEFFفترة التقرير (${currentAnalyticsMode === 'weekly' ? 'أسبوعي' : 'شهري'}),إجمالي الإنتاج\n`;
            const prodGroups = {};
            productionLogs.forEach(item => {
                const key = currentAnalyticsMode === 'weekly' ? getWeekIdentifier(item.date) : getMonthIdentifier(item.date);
                if (!prodGroups[key]) prodGroups[key] = 0;
                prodGroups[key] += item.qty;
            });
            for (const [period, total] of Object.entries(prodGroups)) {
                csvContent += `"${period}",${total}\n`;
            }
            downloadCSV(csvContent, `analytics_report_${currentAnalyticsMode}.csv`);
        }

        // 8. تصدير معلومات العمال وهواتفهم
        function exportWorkersExcel() {
            let csvContent = "\uFEFFرقم,اسم العامل,رقم الهاتف\n";
            workersList.forEach((w, index) => {
                csvContent += `${index + 1},"${w.name}","${w.phone}"\n`;
            });
            downloadCSV(csvContent, "workers_directory.csv");
        }

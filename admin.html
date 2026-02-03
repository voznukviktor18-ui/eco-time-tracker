<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Учет заработной платы</title>
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Arial', sans-serif;
        }
        body {
            background-color: #f3f3f3;
            padding: 20px;
            color: #1f1f1f;
        }
        .adjustment-container {
    max-height: 400px;
    overflow-y: auto;
    margin: 15px 0;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}

.shift-adjust-item {
    padding: 8px;
    border-bottom: 1px solid #eee;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.shift-adjust-item:last-child {
    border-bottom: none;
}

.shift-checkbox {
    margin-right: 10px;
}

.shift-info {
    flex-grow: 1;
}

.shift-amount {
    min-width: 100px;
    text-align: right;
}

.amount-input {
    width: 120px;
    padding: 4px;
    text-align: right;
}

.worker-info {
    background: #f8f9fa;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 15px;
}

.remaining-amount {
    margin-top: 15px;
    padding: 10px;
    background: #e6f7ff;
    border-radius: 5px;
    font-weight: bold;
}

.distribution-summary {
    margin-top: 15px;
    padding: 10px;
    background: #f0f8ff;
    border-radius: 5px;
}
        .container {
            max-width: 1200px;
            margin: 0 auto;
            background: white;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            padding: 20px;
        }
        h1, h2, h3 {
            color: #203864;
            margin-bottom: 15px;
        }
        .tabs {
            display: flex;
            border-bottom: 2px solid #ccc;
            margin-bottom: 20px;
            flex-wrap: wrap;
        }
        .tab {
            padding: 10px 20px;
            cursor: pointer;
            background: #e0e0e0;
            border: 1px solid #ccc;
            border-bottom: none;
            border-radius: 5px 5px 0 0;
            margin-right: 5px;
            margin-bottom: 5px;
        }
        .tab.active {
            background: white;
            border-bottom: 2px solid white;
            margin-bottom: -2px;
        }
        .tab-content {
            display: none;
        }
        .tab-content.active {
            display: block;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
        }
        th, td {
            border: 1px solid #d0d0d0;
            padding: 8px 10px;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
            font-weight: bold;
        }
        tr:nth-child(even) {
            background-color: #f9f9f9;
        }
        input, select, textarea {
            width: 100%;
            padding: 6px;
            border: 1px solid #ccc;
            border-radius: 3px;
        }
        button {
            padding: 8px 15px;
            background-color: #2e5fa8;
            color: white;
            border: none;
            border-radius: 3px;
            cursor: pointer;
            margin: 5px 0;
        }
        button:hover {
            background-color: #1e3f6c;
        }
        button.secondary {
            background-color: #6c757d;
        }
        button.secondary:hover {
            background-color: #5a6268;
        }
        button.danger {
            background-color: #dc3545;
        }
        button.danger:hover {
            background-color: #c82333;
        }
        .summary-box {
            background-color: #e6f0ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
        }
        .monthly-summary {
            margin-top: 20px;
        }
        .monthly-summary h4 {
            margin: 10px 0 5px 0;
            color: #2e5fa8;
        }
        .currency {
            text-align: right;
        }
        .positive {
            color: #0c7c0c;
        }
        .negative {
            color: #c82828;
        }
        .controls {
            margin: 15px 0;
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }
        .control-group {
            display: flex;
            flex-direction: column;
            min-width: 200px;
        }
        .control-group label {
            margin-bottom: 5px;
            font-weight: bold;
        }
        .invoice {
            background: white;
            border: 1px solid #ccc;
            padding: 20px;
            margin: 15px 0;
            page-break-inside: avoid;
        }
        .invoice-header {
            text-align: center;
            margin-bottom: 20px;
            border-bottom: 2px solid #333;
            padding-bottom: 10px;
        }
        .invoice-details {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-bottom: 20px;
        }
        .invoice-table {
            width: 100%;
            margin: 15px 0;
        }
        .invoice-table th {
            background-color: #2e5fa8;
            color: white;
        }
        .invoice-total {
            font-weight: bold;
            font-size: 1.1em;
            margin-top: 15px;
            border-top: 2px solid #333;
            padding-top: 10px;
        }
        .worker-invoices {
            margin-top: 20px;
        }
        .section {
            margin-bottom: 25px;
        }
        .period-controls {
            background: #f0f8ff;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
        }
        .summary-box {
    background: white;
    border-radius: 8px;
    padding: 20px;
    margin: 15px 0;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    border: 1px solid #e8e8e8;
}

.positive {
    color: #1890ff !important; /* Синий для положительного баланса */
}

.negative {
    color: #ff4d4f !important; /* Красный для отрицательного баланса */
}
        .payment-history {
            margin-top: 10px;
            padding: 10px;
            background: #f9f9f9;
            border-radius: 5px;
            display: none;
        }
        .payment-item {
            display: flex;
            justify-content: space-between;
            padding: 5px 0;
            border-bottom: 1px solid #eee;
        }
        .payment-image {
            max-width: 100%;
            max-height: 200px;
            margin-top: 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
        .act-container {
            margin-top: 20px;
        }
        .image-preview {
            max-width: 300px;
            max-height: 200px;
            margin: 10px 0;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
        .delete-button-container {
            margin-top: 20px;
            padding-top: 15px;
            border-top: 1px solid #eee;
        }
        .workers-checkboxes {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 10px;
            margin: 10px 0;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
            max-height: 200px;
            overflow-y: auto;
        }
        .worker-checkbox {
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .status-active {
            color: green;
            font-weight: bold;
        }
        .status-fired {
            color: #dc3545;
            font-weight: bold;
        }
        .status-blacklist {
            color: #000;
            font-weight: bold;
        }
        .fired-reason {
            font-style: italic;
            color: #666;
            font-size: 0.9em;
        }
        .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
        }
        .modal {
            background: white;
            padding: 20px;
            border-radius: 5px;
            width: 400px;
            max-width: 90%;
        }
        .modal-buttons {
            display: flex;
            gap: 10px;
            margin-top: 20px;
            justify-content: flex-end;
        }
        @media print {
            .tabs, .controls, button, .payment-history {
                display: none !important;
            }
            .tab-content {
                display: block !important;
            }
            .container {
                box-shadow: none;
                padding: 0;
            }
        }
        .adjustment-container {
    max-height: 400px;
    overflow-y: auto;
    margin: 15px 0;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}

.shift-adjust-item {
    padding: 8px;
    border-bottom: 1px solid #eee;
}

.shift-adjust-item:last-child {
    border-bottom: none;
}

.shift-adjust-item label {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
}

.shift-adjust-item input[type="checkbox"] {
    margin-right: 10px;
    width: auto;
}

.worker-info {
    background: #f8f9fa;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 15px;
}

.remaining-amount {
    margin-top: 15px;
    padding: 10px;
    background: #e6f7ff;
    border-radius: 5px;
    font-weight: bold;
}
    </style>
</head>
<body>
    <div class="container">
        <h1>Учет заработной платы</h1>
        
        <div class="tabs">
            <div class="tab active" data-tab="general">Общая информация</div>
            <div class="tab" data-tab="workers">Работники</div>
            <div class="tab" data-tab="shifts">Учет смен</div>
            <div class="tab" data-tab="payments">Выплаты зарплаты</div>
            <div class="tab" data-tab="invoices">Накладные</div>
            <div class="tab" data-tab="acts">Акты о выплате</div>
            <div class="tab" data-tab="fired">Уволенные сотрудники</div>
        </div>
        
        <div class="tab-content active" id="general">
            <h2>Общая сводка</h2>
            <div class="summary-box">
                <h3>Финансовая сводка (за весь период)</h3>
                <p>Всего заработано: <span id="total-earned" class="currency">0 ₸</span></p>
                <p>Всего выплачено: <span id="total-paid" class="currency">0 ₸</span></p>
                <p>Общая задолженность: <span id="total-debt" class="currency">0 ₸</span></p>
            </div>
            
            <div class="monthly-summary">
                <h3>Сводка по месяцам</h3>
                <div id="monthly-summary-container">
                    <!-- Данные будут заполнены скриптом -->
                </div>
            </div>
            
            <h3>Статус работников</h3>
            <table id="workers-summary">
                <thead>
                    <tr>
                        <th>Работник</th>
                        <th>Статус</th>
                        <th>Заработано</th>
                        <th>Выплачено</th>
                        <th>Задолженность</th>
                        <th>Действия</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Данные будут заполнены скриптом -->
                </tbody>
            </table>
        </div>
        
        <div class="tab-content" id="workers">
            <h2>Список работников</h2>
            <div class="controls">
                <div class="control-group">
                    <label for="worker-name">ФИО работника</label>
                    <input type="text" id="worker-name" placeholder="ФИО работника">
                </div>
                <div class="control-group">
                    <label for="worker-position">Должность</label>
                    <input type="text" id="worker-position" placeholder="Должность">
                </div>
                <div class="control-group">
                    <label for="worker-rate">Ставка за смену (₸)</label>
                    <input type="number" id="worker-rate" placeholder="Ставка за смену" min="0">
                </div>
                <div class="control-group">
                    <label>&nbsp;</label>
                    <button id="add-worker">Добавить работника</button>
                </div>
            </div>
            
            <table id="workers-list">
                <thead>
                    <tr>
                        <th>ФИО</th>
                        <th>Должность</th>
                        <th>Статус</th>
                        <th>Ставка за смену</th>
                        <th>Действия</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Данные будут заполнены скриптом -->
                </tbody>
            </table>
        </div>
        
        <div class="tab-content" id="shifts">
            <h2>Учет отработанных смен</h2>
            <div class="controls">
                <div class="control-group">
                    <label for="shift-date">Дата смены</label>
                    <input type="date" id="shift-date">
                </div>
                <div class="control-group">
                    <label>Выберите работников</label>
                    <div id="shift-workers-checkboxes" class="workers-checkboxes">
                        <!-- Чекбоксы будут заполнены скриптом -->
                    </div>
                </div>
                <div class="control-group">
                    <label for="shift-count">Количество смен</label>
                    <input type="number" id="shift-count" placeholder="Количество смен" min="0.5" step="0.5" value="1">
                </div>
                <div class="control-group">
                    <label>&nbsp;</label>
                    <button id="add-shift">Добавить смену</button>
                </div>
            </div>
            
            <table id="shifts-list">
                <thead>
                    <tr>
                        <th>Дата</th>
                        <th>Работник</th>
                        <th>Количество смен</th>
                        <th>Заработано</th>
                        <th>Действия</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Данные будут заполнены скриптом -->
                </tbody>
            </table>
        </div>
        
        <div class="tab-content" id="payments">
            <h2>Учет выплат заработной платы</h2>
            
            <div class="controls">
                <div class="control-group">
                    <label for="payment-date">Дата выплаты</label>
                    <input type="date" id="payment-date">
                </div>
                <div class="control-group">
                    <label>Выберите работников</label>
                    <div id="payment-workers-checkboxes" class="workers-checkboxes">
                        <!-- Чекбоксы будут заполнены скриптом -->
                    </div>
                </div>
                <div class="control-group">
                    <label for="payment-amount">Сумма выплаты (₸)</label>
                    <input type="number" id="payment-amount" placeholder="Сумма выплаты" min="0">
                </div>
                <div class="control-group">
                    <label>&nbsp;</label>
                    <button id="add-payment">Добавить выплату</button>
                </div>
            </div>
            
            <h3>История выплат по работникам</h3>
            <table id="payments-summary">
                <thead>
                    <tr>
                        <th>Работник</th>
                        <th>Статус</th>
                        <th>Всего выплачено</th>
                        <th>Последняя выплата</th>
                        <th>Действия</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Данные будут заполнены скриптом -->
                </tbody>
            </table>
            
            <h3>Детальная история выплат</h3>
            <table id="payments-list">
                <thead>
                    <tr>
                        <th>Дата</th>
                        <th>Работник</th>
                        <th>Статус</th>
                        <th>Сумма выплаты</th>
                        <th>Действия</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Данные будут заполнены скриптом -->
                </tbody>
            </table>
        </div>
        
        <div class="tab-content" id="invoices">
            <h2>Накладные на выплату заработной платы</h2>
            
            <div class="controls">
                <div class="control-group">
                    <label for="invoice-type">Тип накладной</label>
                    <select id="invoice-type">
                        <option value="single">На одного работника</option>
                        <option value="period">За период (все работники)</option>
                    </select>
                </div>
                <div id="single-worker-controls">
                    <div class="control-group">
                        <label for="invoice-worker">Работник</label>
                        <select id="invoice-worker">
                            <option value="">Выберите работника</option>
                        </select>
                    </div>
                </div>
                <div id="period-controls" style="display: none;">
                    <div class="control-group">
                        <label for="period-start">Начало периода</label>
                        <input type="date" id="period-start">
                    </div>
                    <div class="control-group">
                        <label for="period-end">Конец периода</label>
                        <input type="date" id="period-end">
                    </div>
                </div>
                <div class="control-group">
                    <label for="invoice-date">Дата накладной</label>
                    <input type="date" id="invoice-date">
                </div>
                <div class="control-group">
                    <label for="invoice-number">Номер накладной</label>
                    <input type="text" id="invoice-number" placeholder="Номер накладной" readonly>
                </div>
                <div class="control-group">
                    <label for="foreman-name">ФИО бригадира</label>
                    <input type="text" id="foreman-name" placeholder="ФИО бригадира">
                </div>
                <div class="control-group">
                    <label>&nbsp;</label>
                    <div class="control-group">
    <label for="include-previous-payments">
        <input type="checkbox" id="include-previous-payments">
        Включить выплаты за предыдущий период
    </label>
</div>
                    <button id="generate-invoice">Сформировать накладную</button>
                </div>
            </div>
            
            <div class="worker-invoices">
                <h3 id="invoices-title">Накладные</h3>
                <div id="invoices-container">
                    <!-- Накладные будут отображаться здесь -->
                </div>
            </div>
        </div>
        
        <div class="tab-content" id="acts">
            <h2>Акты о выплате заработной платы</h2>
            
            <div class="controls">
                <div class="control-group">
                    <label for="act-date">Дата акта</label>
                    <input type="date" id="act-date">
                </div>
                <div class="control-group">
                    <label for="act-number">Номер акта</label>
                    <input type="text" id="act-number" placeholder="Номер акта" readonly>
                </div>
                <div class="control-group">
                    <label for="act-foreman">ФИО бригадира</label>
                    <input type="text" id="act-foreman" placeholder="ФИО бригадира">
                </div>
                <div class="control-group">
                    <label for="act-image">Фото доказательство (подписи)</label>
                    <input type="file" id="act-image" accept="image/*">
                </div>
                <div class="control-group">
                    <label>&nbsp;</label>
                    <button id="generate-act">Сформировать акт</button>
                </div>
            </div>
            
            <div id="act-preview" class="image-preview" style="display: none;"></div>
            
            <div class="act-container">
                <h3>Созданные акты</h3>
                <div id="acts-container">
                    <!-- Акты будут отображаться здесь -->
                </div>
            </div>
        </div>
        
        <div class="tab-content" id="fired">
            <h2>Уволенные сотрудники</h2>
            
            <table id="fired-list">
                <thead>
                    <tr>
                        <th>ФИО</th>
                        <th>Должность</th>
                        <th>Статус</th>
                        <th>Причина увольнения</th>
                        <th>Дата увольнения</th>
                        <th>Действия</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Данные будут заполнены скриптом -->
                </tbody>
            </table>
        </div>
    </div>
    

    <script>
        // Хранение данных
        let workers = JSON.parse(localStorage.getItem('workers')) || [];
        let currentAdjustment = {
    paymentId: null,
    workerId: null,
    assignedShifts: [],
    unassignedShifts: []
};
        let shifts = JSON.parse(localStorage.getItem('shifts')) || [];
        let payments = JSON.parse(localStorage.getItem('payments')) || [];
        let invoices = JSON.parse(localStorage.getItem('invoices')) || [];
        let acts = JSON.parse(localStorage.getItem('acts')) || [];
        
        // Статусы работников
        const WORKER_STATUS = {
            ACTIVE: 'active',
            FIRED: 'fired',
            BLACKLIST: 'blacklist'
        };
        
        // Причины увольнения
        const FIRING_REASONS = {
            COMPLETION: 'Завершение работ',
            RELOCATION: 'Переезд в другой город',
            FAMILY: 'Семейные обстоятельства',
            HEALTH: 'Проблемы со здоровьем',
            CONFLICT: 'Конфликт с руководством',
            OTHER: 'Другая причина',
            BLACKLIST: 'Черный список (не вызывать)'
        };
        
        // DOM элементы
        const tabs = document.querySelectorAll('.tab');
        const tabContents = document.querySelectorAll('.tab-content');
        
        // Инициализация вкладок
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const tabId = tab.getAttribute('data-tab');
                
                tabs.forEach(t => t.classList.remove('active'));
                tabContents.forEach(tc => tc.classList.remove('active'));
                
                tab.classList.add('active');
                document.getElementById(tabId).classList.add('active');
                
                // При переходе на вкладку накладных обновляем список работников
                if (tabId === 'invoices') {
                    updateInvoiceWorkerDropdown();
                    renderInvoices();
                }
                if (tabId === 'acts') {
                    renderActs();
                }
                if (tabId === 'payments') {
                    renderPaymentWorkersCheckboxes();
                }
                if (tabId === 'shifts') {
                    renderShiftWorkersCheckboxes();
                }
                if (tabId === 'fired') {
                    renderFiredWorkers();
                }
            });
        });
        
        // Переключение типа накладной
        document.getElementById('invoice-type').addEventListener('change', function() {
            const type = this.value;
            document.getElementById('single-worker-controls').style.display = type === 'single' ? 'block' : 'none';
            document.getElementById('period-controls').style.display = type === 'period' ? 'block' : 'none';
        });
        
        // Превью изображения для акта
        document.getElementById('act-image').addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const preview = document.getElementById('act-preview');
                    preview.innerHTML = `<img src="${e.target.result}" alt="Превью изображения" class="image-preview">`;
                    preview.style.display = 'block';
                }
                reader.readAsDataURL(file);
            }
        });
        
        // Форматирование чисел (добавление разделителей и знака тенге)
        function formatCurrency(amount) {
            return new Intl.NumberFormat('ru-KZ', { 
                maximumFractionDigits: 0 
            }).format(amount) + ' ₸';
        }
        
        // Получение текста статуса
        function getStatusText(status) {
            switch(status) {
                case WORKER_STATUS.ACTIVE:
                    return '<span class="status-active">Активный</span>';
                case WORKER_STATUS.FIRED:
                    return '<span class="status-fired">Уволен</span>';
                case WORKER_STATUS.BLACKLIST:
                    return '<span class="status-blacklist">Черный список</span>';
                default:
                    return status;
            }
        }
        
        // Генерация следующего номера для накладных
        function getNextInvoiceNumber() {
            if (invoices.length === 0) return 'Н-001';
            
            // Находим максимальный номер
            const numbers = invoices.map(inv => {
                const match = inv.number.match(/Н-(\d+)/);
                return match ? parseInt(match[1]) : 0;
            });
            
            const maxNumber = Math.max(...numbers);
            return `Н-${String(maxNumber + 1).padStart(3, '0')}`;
        }
        
        // Генерация следующего номера для актов
        function getNextActNumber() {
            if (acts.length === 0) return 'А-001';
            
            // Находим максимальный номер
            const numbers = acts.map(act => {
                const match = act.number.match(/А-(\d+)/);
                return match ? parseInt(match[1]) : 0;
            });
            
            const maxNumber = Math.max(...numbers);
            return `А-${String(maxNumber + 1).padStart(3, '0')}`;
        }
        
        // Сохранение данных в localStorage
        function saveData() {
            localStorage.setItem('workers', JSON.stringify(workers));
            localStorage.setItem('shifts', JSON.stringify(shifts));
            localStorage.setItem('payments', JSON.stringify(payments));
            localStorage.setItem('invoices', JSON.stringify(invoices));
            localStorage.setItem('acts', JSON.stringify(acts));
            updateAllDisplays();
        }
        
        // Обновление всех отображений данных
        function updateAllDisplays() {
            renderWorkersList();
            renderShiftsList();
            renderPaymentsList();
            updateSummary();
            updateWorkerDropdowns();
            renderPaymentWorkersCheckboxes();
            renderShiftWorkersCheckboxes();
            renderFiredWorkers();
        }
        
        // Обновление выпадающих списков работников
        function updateWorkerDropdowns() {
            const invoiceWorkerSelect = document.getElementById('invoice-worker');
            
            // Сохраняем текущее значение
            const currentInvoiceWorker = invoiceWorkerSelect.value;
            
            // Очищаем список
            invoiceWorkerSelect.innerHTML = '<option value="">Выберите работника</option>';
            
            // Заполняем списки только активными работниками
            workers.filter(worker => worker.status === WORKER_STATUS.ACTIVE).forEach(worker => {
                const option = document.createElement('option');
                option.value = worker.id;
                option.textContent = `${worker.name} (${worker.position})`;
                invoiceWorkerSelect.appendChild(option);
            });
            
            // Восстанавливаем выбранное значение, если оно все еще существует
            if (currentInvoiceWorker) {
                invoiceWorkerSelect.value = currentInvoiceWorker;
            }
        }
        
        // Обновление чекбоксов работников для выплат
        function renderPaymentWorkersCheckboxes() {
            const checkboxesContainer = document.getElementById('payment-workers-checkboxes');
            checkboxesContainer.innerHTML = '';
            
            const activeWorkers = workers.filter(worker => worker.status === WORKER_STATUS.ACTIVE);
            
            if (activeWorkers.length === 0) {
                checkboxesContainer.innerHTML = '<p>Нет активных работников</p>';
                return;
            }
            
            activeWorkers.forEach(worker => {
                const debt = calculateWorkerEarnings(worker.id) - calculateWorkerPayments(worker.id);
                
                const checkboxDiv = document.createElement('div');
                checkboxDiv.className = 'worker-checkbox';
                
                checkboxDiv.innerHTML = `
                    <input type="checkbox" id="payment-worker-${worker.id}" value="${worker.id}" ${debt > 0 ? '' : 'disabled'}>
                    <label for="payment-worker-${worker.id}">${worker.name} (${worker.position}) - задолженность: ${formatCurrency(debt)}</label>
                `;
                
                checkboxesContainer.appendChild(checkboxDiv);
            });
        }
        
        // Обновление чекбоксов работников для смен
        function renderShiftWorkersCheckboxes() {
            const checkboxesContainer = document.getElementById('shift-workers-checkboxes');
            checkboxesContainer.innerHTML = '';
            
            const activeWorkers = workers.filter(worker => worker.status === WORKER_STATUS.ACTIVE);
            
            if (activeWorkers.length === 0) {
                checkboxesContainer.innerHTML = '<p>Нет активных работников</p>';
                return;
            }
            
            activeWorkers.forEach(worker => {
                const checkboxDiv = document.createElement('div');
                checkboxDiv.className = 'worker-checkbox';
                
                checkboxDiv.innerHTML = `
                    <input type="checkbox" id="shift-worker-${worker.id}" value="${worker.id}">
                    <label for="shift-worker-${worker.id}">${worker.name} (${worker.position})</label>
                `;
                
                checkboxesContainer.appendChild(checkboxDiv);
            });
        }
        
        // Обновление выпадающего списка работников для накладных
        function updateInvoiceWorkerDropdown() {
            const invoiceWorkerSelect = document.getElementById('invoice-worker');
            
            // Сохраняем текущее значение
            const currentInvoiceWorker = invoiceWorkerSelect.value;
            
            // Очищаем список
            invoiceWorkerSelect.innerHTML = '<option value="">Выберите работника</option>';
            
            // Заполняем список только активными работниками
            const activeWorkers = workers.filter(worker => worker.status === WORKER_STATUS.ACTIVE);
            
            if (activeWorkers.length === 0) {
                invoiceWorkerSelect.innerHTML = '<option value="">Нет активных работников</option>';
                return;
            }
            
            activeWorkers.forEach(worker => {
                const option = document.createElement('option');
                option.value = worker.id;
                option.textContent = `${worker.name} (${worker.position})`;
                invoiceWorkerSelect.appendChild(option);
            });
            
            // Восстанавливаем выбранное значение, если оно все еще существует
            if (currentInvoiceWorker) {
                invoiceWorkerSelect.value = currentInvoiceWorker;
            }
            
            // Устанавливаем текущую дату по умолчанию
            const today = new Date().toISOString().split('T')[0];
            document.getElementById('invoice-date').value = today;
            document.getElementById('period-start').value = today;
            document.getElementById('period-end').value = today;
            document.getElementById('act-date').value = today;
            
            // Генерируем номер накладной и акта
            document.getElementById('invoice-number').value = getNextInvoiceNumber();
            document.getElementById('act-number').value = getNextActNumber();
        }
        
        // Расчет заработка работника
        function calculateWorkerEarnings(workerId) {
            const workerShifts = shifts.filter(shift => shift.workerId === workerId);
            return workerShifts.reduce((total, shift) => {
                const worker = workers.find(w => w.id === workerId);
                return total + (shift.count * worker.rate);
            }, 0);
        }
        
        // Расчет выплат работнику
        function calculateWorkerPayments(workerId) {
            const workerPayments = payments.filter(payment => payment.workerId === workerId);
            return workerPayments.reduce((total, payment) => total + payment.amount, 0);
        }
        
        // Получение последней выплаты работнику
        function getLastPaymentDate(workerId) {
            const workerPayments = payments.filter(payment => payment.workerId === workerId);
            if (workerPayments.length === 0) return 'Не было выплат';
            
            const lastPayment = workerPayments.sort((a, b) => new Date(b.date) - new Date(a.date))[0];
            return new Date(lastPayment.date).toLocaleDateString('ru-RU');
        }
        
        // Расчет заработка работника за период
        function calculateWorkerEarningsForPeriod(workerId, startDate, endDate) {
            const workerShifts = shifts.filter(shift => {
                if (shift.workerId !== workerId) return false;
                const shiftDate = new Date(shift.date);
                const start = new Date(startDate);
                const end = new Date(endDate);
                end.setHours(23, 59, 59);
                return shiftDate >= start && shiftDate <= end;
            });
            
            return workerShifts.reduce((total, shift) => {
                const worker = workers.find(w => w.id === workerId);
                return total + (shift.count * worker.rate);
            }, 0);
        }
        
        // Расчет выплат работнику за период (исключая выплаты, сделанные В ПЕРВЫЙ ДЕНЬ ПЕРИОДА)
function calculateWorkerPaymentsForPeriod(workerId, startDate, endDate) {
    const workerPayments = payments.filter(payment => {
        if (payment.workerId !== workerId) return false;
        
        const paymentDate = new Date(payment.date);
        const start = new Date(startDate);
        const end = new Date(endDate);
        
        // Приводим все даты к началу дня для корректного сравнения
        paymentDate.setHours(0, 0, 0, 0);
        start.setHours(0, 0, 0, 0);
        end.setHours(23, 59, 59, 999);
        
        // Проверяем, что выплата входит в период
        const isInPeriod = paymentDate >= start && paymentDate <= end;
        
        // Исключаем ТОЛЬКО выплаты, сделанные именно в первый день периода
        // (те, что были сделаны в дату начала периода)
        const isFirstDayOfPeriod = paymentDate.getTime() === start.getTime();
        
        return isInPeriod && !isFirstDayOfPeriod;
    });
    
    return workerPayments.reduce((total, payment) => total + payment.amount, 0);
}
// Для накладных - включать ВСЕ выплаты периода
function calculateWorkerPaymentsForPeriodAll(workerId, startDate, endDate) {
    const workerPayments = payments.filter(payment => {
        if (payment.workerId !== workerId) return false;
        
        const paymentDate = new Date(payment.date);
        const start = new Date(startDate);
        const end = new Date(endDate);
        
        paymentDate.setHours(0, 0, 0, 0);
        start.setHours(0, 0, 0, 0);
        end.setHours(23, 59, 59, 999);
        
        return paymentDate >= start && paymentDate <= end;
    });
    
    return workerPayments.reduce((total, payment) => total + payment.amount, 0);
}
// ДОБАВИТЬ эту новую функцию для расчета выплат БЕЗ исключения первого дня
function calculateWorkerPaymentsForPeriodIncludingFirstDay(workerId, startDate, endDate) {
    const workerPayments = payments.filter(payment => {
        if (payment.workerId !== workerId) return false;
        
        const paymentDate = new Date(payment.date);
        const start = new Date(startDate);
        const end = new Date(endDate);
        
        paymentDate.setHours(0, 0, 0, 0);
        start.setHours(0, 0, 0, 0);
        end.setHours(23, 59, 59, 999);
        
        return paymentDate >= start && paymentDate <= end;
    });
    
    return workerPayments.reduce((total, payment) => total + payment.amount, 0);
}

// 
        
        // Получение выплат за конкретный день
        function getPaymentsByDate(date) {
            return payments.filter(payment => payment.date === date);
        }
        
        // Обновление сводной информации
        function updateSummary() {
            // Расчет общих сумм (ВСЕ работники, включая уволенных)
            const totalEarned = workers.reduce((total, worker) => total + calculateWorkerEarnings(worker.id), 0);
            const totalPaid = workers.reduce((total, worker) => total + calculateWorkerPayments(worker.id), 0);
            const totalDebt = totalEarned - totalPaid;
            
            // Обновление общей сводки
            document.getElementById('total-earned').textContent = formatCurrency(totalEarned);
            document.getElementById('total-paid').textContent = formatCurrency(totalPaid);
            document.getElementById('total-debt').textContent = formatCurrency(totalDebt);
            
            // Обновление помесячной сводки
            updateMonthlySummary();
            
            // Обновление таблицы статуса работников (только активные)
            const workersSummaryBody = document.querySelector('#workers-summary tbody');
            workersSummaryBody.innerHTML = '';
            
            const activeWorkers = workers.filter(worker => worker.status === WORKER_STATUS.ACTIVE);
            
            if (activeWorkers.length === 0) {
                workersSummaryBody.innerHTML = '<tr><td colspan="6" style="text-align: center;">Нет активных работников</td></tr>';
                return;
            }
            
            activeWorkers.forEach(worker => {
                const earned = calculateWorkerEarnings(worker.id);
                const paid = calculateWorkerPayments(worker.id);
                const debt = earned - paid;
                
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${worker.name} (${worker.position})</td>
                    <td>${getStatusText(worker.status)}</td>
                    <td class="currency">${formatCurrency(earned)}</td>
                    <td class="currency">${formatCurrency(paid)}</td>
                    <td class="currency ${debt > 0 ? 'negative' : 'positive'}">${formatCurrency(debt)}</td>
                    <td>
                        <button class="view-payments" data-id="${worker.id}">История выплат</button>
                    </td>
                `;
                
                workersSummaryBody.appendChild(row);
            });
            
            // Добавление обработчиков для кнопок просмотра выплат
            document.querySelectorAll('.view-payments').forEach(button => {
                button.addEventListener('click', (e) => {
                    const workerId = e.target.getAttribute('data-id');
                    showPaymentHistory(workerId);
                });
            });
        }
        
      // Обновление помесячной сводки
function updateMonthlySummary() {
    const monthlyContainer = document.getElementById('monthly-summary-container');
    monthlyContainer.innerHTML = '';
    
    // Получаем все уникальные месяцы
    const monthsMap = {};
    
    // Собираем все месяцы, в которых была активность
    [...shifts, ...payments].forEach(item => {
        const date = new Date(item.date);
        const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
        const monthName = date.toLocaleDateString('ru-RU', { month: 'long', year: 'numeric' });
        
        if (!monthsMap[monthKey]) {
            monthsMap[monthKey] = {
                name: monthName,
                key: monthKey,
                earned: 0,
                paid: 0
            };
        }
    });
    
    // Рассчитываем заработок по месяцам
    shifts.forEach(shift => {
        const date = new Date(shift.date);
        const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
        const worker = workers.find(w => w.id === shift.workerId);
        
        if (monthsMap[monthKey] && worker) {
            monthsMap[monthKey].earned += shift.count * worker.rate;
        }
    });
    
    // Рассчитываем выплаты по месяцам
    payments.forEach(payment => {
        const date = new Date(payment.date);
        const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
        
        if (monthsMap[monthKey]) {
            monthsMap[monthKey].paid += payment.amount;
        }
    });
    
    // Сортируем месяцы по порядку (старые сначала)
    const sortedMonths = Object.values(monthsMap).sort((a, b) => {
        return new Date(a.key + '-01') - new Date(b.key + '-01');
    });
    
    // Правильный расчет: выплаты сначала идут на погашение предыдущей задолженности
    let remainingDebt = 0;
    const monthlyData = sortedMonths.map(month => {
        const monthlyEarned = month.earned;
        const monthlyPaid = month.paid;
        
        // Сначала выплаты идут на погашение предыдущей задолженности
        let debtPaidThisMonth = 0;
        let currentMonthDebt = 0;
        
        if (remainingDebt > 0) {
            // Часть выплат идет на погашение старой задолженности
            debtPaidThisMonth = Math.min(monthlyPaid, remainingDebt);
            remainingDebt -= debtPaidThisMonth;
        }
        
        // Оставшиеся выплаты идут на текущий месяц
        const remainingPayment = monthlyPaid - debtPaidThisMonth;
        currentMonthDebt = monthlyEarned - remainingPayment;
        
        if (currentMonthDebt > 0) {
            remainingDebt += currentMonthDebt;
        }
        
        return {
            ...month,
            monthlyEarned: monthlyEarned,
            monthlyPaid: monthlyPaid,
            debtPaidThisMonth: debtPaidThisMonth,
            currentMonthDebt: currentMonthDebt,
            remainingDebt: remainingDebt
        };
    });
    
    // Сортируем для отображения (новые сверху)
    monthlyData.reverse();
    
    // Отображаем сводку
    monthlyData.forEach(month => {
        const monthElement = document.createElement('div');
        monthElement.className = 'summary-box';
        
        monthElement.innerHTML = `
            <div style="border-bottom: 2px solid #2e5fa8; padding-bottom: 10px; margin-bottom: 15px;">
                <h4 style="color: #2e5fa8; margin: 0;">${month.name}</h4>
            </div>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 15px;">
                <div style="background: #f0f8ff; padding: 12px; border-radius: 5px; border: 1px solid #d0e8ff;">
                    <div style="font-size: 0.9em; color: #2e5fa8; margin-bottom: 5px;">Заработано</div>
                    <div style="font-weight: bold; font-size: 1.1em; color: #2e5fa8;" class="currency">${formatCurrency(month.monthlyEarned)}</div>
                </div>
                
                <div style="background: #f8fff0; padding: 12px; border-radius: 5px; border: 1px solid #e0f0d0;">
                    <div style="font-size: 0.9em; color: #388e3c; margin-bottom: 5px;">Выплачено</div>
                    <div style="font-weight: bold; font-size: 1.1em; color: #388e3c;" class="currency">${formatCurrency(month.monthlyPaid)}</div>
                </div>
            </div>
            
            ${month.debtPaidThisMonth > 0 ? `
                <div style="background: #fff0e0; padding: 12px; border-radius: 5px; border: 1px solid #ffd0b0; margin-bottom: 15px;">
                    <div style="font-size: 0.9em; color: #e65100; margin-bottom: 5px;">Погашено задолженности за предыдущие месяцы</div>
                    <div style="font-weight: bold; font-size: 1.1em; color: #e65100;" class="currency">${formatCurrency(month.debtPaidThisMonth)}</div>
                </div>
            ` : ''}
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 15px;">
                <div style="background: ${month.currentMonthDebt > 0 ? '#fff5f5' : '#f0fff4'}; padding: 12px; border-radius: 5px; border: 1px solid ${month.currentMonthDebt > 0 ? '#ffd0d0' : '#d0f0d0'};">
                    <div style="font-size: 0.9em; color: ${month.currentMonthDebt > 0 ? '#c62828' : '#2e7d32'}; margin-bottom: 5px;">
                        ${month.currentMonthDebt > 0 ? 'Задолженность за месяц' : 'Переплата за месяц'}
                    </div>
                    <div style="font-weight: bold; font-size: 1.1em;" class="currency ${month.currentMonthDebt > 0 ? 'negative' : 'positive'}">
                        ${formatCurrency(Math.abs(month.currentMonthDebt))}
                    </div>
                </div>
                
                <div style="background: ${month.remainingDebt > 0 ? '#fff5f5' : '#f0fff4'}; padding: 12px; border-radius: 5px; border: 1px solid ${month.remainingDebt > 0 ? '#ffd0d0' : '#d0f0d0'};">
                    <div style="font-size: 0.9em; color: ${month.remainingDebt > 0 ? '#c62828' : '#2e7d32'}; margin-bottom: 5px;">
                        ${month.remainingDebt > 0 ? 'Общая задолженность' : 'Общая переплата'}
                    </div>
                    <div style="font-weight: bold; font-size: 1.1em;" class="currency ${month.remainingDebt > 0 ? 'negative' : 'positive'}">
                        ${formatCurrency(Math.abs(month.remainingDebt))}
                    </div>
                </div>
            </div>
        `;
        
        monthlyContainer.appendChild(monthElement);
    });
    
    if (monthlyData.length === 0) {
        monthlyContainer.innerHTML = '<div class="summary-box"><p style="text-align: center; color: #666;">Нет данных за периоды</p></div>';
    }
}
        
        // Показать историю выплат работника
        function showPaymentHistory(workerId) {
            const worker = workers.find(w => w.id === workerId);
            const workerPayments = payments.filter(payment => payment.workerId === workerId);
            
            if (workerPayments.length === 0) {
                alert(`У работника ${worker.name} нет истории выплат`);
                return;
            }
            
            let historyMessage = `История выплат для ${worker.name}:\n\n`;
            workerPayments.sort((a, b) => new Date(b.date) - new Date(a.date))
                .forEach(payment => {
                    historyMessage += `${new Date(payment.date).toLocaleDateString('ru-RU')}: ${formatCurrency(payment.amount)}\n`;
                });
            
            alert(historyMessage);
        }
        
        // Отображение списка работников
        function renderWorkersList() {
            const workersListBody = document.querySelector('#workers-list tbody');
            workersListBody.innerHTML = '';
            
            const activeWorkers = workers.filter(worker => worker.status === WORKER_STATUS.ACTIVE);
            
            if (activeWorkers.length === 0) {
                workersListBody.innerHTML = '<tr><td colspan="5" style="text-align: center;">Нет активных работников</td></tr>';
                return;
            }
            
            activeWorkers.forEach(worker => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${worker.name}</td>
                    <td>${worker.position}</td>
                    <td>${getStatusText(worker.status)}</td>
                    <td class="currency">${formatCurrency(worker.rate)}</td>
                    <td>
                        <button class="edit-worker" data-id="${worker.id}">Изменить</button>
                        <button class="fire-worker" data-id="${worker.id}">Уволить</button>
                        <button class="delete-worker danger" data-id="${worker.id}">Удалить</button>
                    </td>
                `;
                
                workersListBody.appendChild(row);
            });
            
            // Добавление обработчиков событий для кнопок
            document.querySelectorAll('.edit-worker').forEach(button => {
                button.addEventListener('click', (e) => {
                    const workerId = e.target.getAttribute('data-id');
                    editWorker(workerId);
                });
            });
            
            document.querySelectorAll('.fire-worker').forEach(button => {
                button.addEventListener('click', (e) => {
                    const workerId = e.target.getAttribute('data-id');
                    fireWorker(workerId);
                });
            });
            
            document.querySelectorAll('.delete-worker').forEach(button => {
                button.addEventListener('click', (e) => {
                    const workerId = e.target.getAttribute('data-id');
                    deleteWorker(workerId);
                });
            });
        }
        
        // Отображение уволенных работников
        function renderFiredWorkers() {
            const firedListBody = document.querySelector('#fired-list tbody');
            firedListBody.innerHTML = '';
            
            const firedWorkers = workers.filter(worker => 
                worker.status === WORKER_STATUS.FIRED || worker.status === WORKER_STATUS.BLACKLIST
            );
            
            if (firedWorkers.length === 0) {
                firedListBody.innerHTML = '<tr><td colspan="6" style="text-align: center;">Нет уволенных сотрудников</td></tr>';
                return;
            }
            
            firedWorkers.forEach(worker => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${worker.name}</td>
                    <td>${worker.position}</td>
                    <td>${getStatusText(worker.status)}</td>
                    <td class="fired-reason">${worker.firingReason || 'Не указана'}</td>
                    <td>${worker.firingDate ? new Date(worker.firingDate).toLocaleDateString('ru-RU') : 'Не указана'}</td>
                    <td>
                        <button class="restore-worker" data-id="${worker.id}">Восстановить</button>
                        <button class="delete-worker danger" data-id="${worker.id}">Удалить</button>
                    </td>
                `;
                
                firedListBody.appendChild(row);
            });
            
            // Добавление обработчиков событий для кнопок
            document.querySelectorAll('.restore-worker').forEach(button => {
                button.addEventListener('click', (e) => {
                    const workerId = e.target.getAttribute('data-id');
                    restoreWorker(workerId);
                });
            });
            
            document.querySelectorAll('.delete-worker').forEach(button => {
                button.addEventListener('click', (e) => {
                    const workerId = e.target.getAttribute('data-id');
                    deleteWorker(workerId);
                });
            });
        }
        
        // Отображение списка смен
        function renderShiftsList() {
            const shiftsListBody = document.querySelector('#shifts-list tbody');
            shiftsListBody.innerHTML = '';
            
            // Сортируем смены по дате (от новых к старым)
            const sortedShifts = [...shifts].sort((a, b) => new Date(b.date) - new Date(a.date));
            
            if (sortedShifts.length === 0) {
                shiftsListBody.innerHTML = '<tr><td colspan="5" style="text-align: center;">Нет данных о сменах</td></tr>';
                return;
            }
            
            sortedShifts.forEach(shift => {
                const worker = workers.find(w => w.id === shift.workerId);
                if (!worker) return;
                
                const earned = shift.count * worker.rate;
                
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${new Date(shift.date).toLocaleDateString('ru-RU')}</td>
                    <td>${worker.name}</td>
                    <td>${shift.count}</td>
                    <td class="currency">${formatCurrency(earned)}</td>
                    <td>
                        <button class="delete-shift" data-id="${shift.id}">Удалить</button>
                    </td>
                `;
                
                shiftsListBody.appendChild(row);
            });
            
            // Добавление обработчиков событий для кнопок
            document.querySelectorAll('.delete-shift').forEach(button => {
                button.addEventListener('click', (e) => {
                    const shiftId = e.target.getAttribute('data-id');
                    deleteShift(shiftId);
                });
            });
        }
        
        // Отображение списка выплат
        function renderPaymentsList() {
            const paymentsSummaryBody = document.querySelector('#payments-summary tbody');
            const paymentsListBody = document.querySelector('#payments-list tbody');
            
            paymentsSummaryBody.innerHTML = '';
            paymentsListBody.innerHTML = '';
            
            // Сводная таблица выплат по работникам
            workers.forEach(worker => {
                const totalPaid = calculateWorkerPayments(worker.id);
                const lastPayment = getLastPaymentDate(worker.id);
                
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${worker.name} (${worker.position})</td>
                    <td>${getStatusText(worker.status)}</td>
                    <td class="currency">${formatCurrency(totalPaid)}</td>
                    <td>${lastPayment}</td>
                    <td>
                        <button class="view-worker-payments" data-id="${worker.id}">Детали</button>
                    </td>
                `;
                
                paymentsSummaryBody.appendChild(row);
            });
            
            // Детальная таблица всех выплат
            const sortedPayments = [...payments].sort((a, b) => new Date(b.date) - new Date(a.date));
            
            if (sortedPayments.length === 0) {
                paymentsListBody.innerHTML = '<tr><td colspan="5" style="text-align: center;">Нет данных о выплатах</td></tr>';
                return;
            }
            
            sortedPayments.forEach(payment => {
                const worker = workers.find(w => w.id === payment.workerId);
                if (!worker) return;
                
                const row = document.createElement('tr');
row.innerHTML = `
    <td>${new Date(payment.date).toLocaleDateString('ru-RU')}</td>
    <td>${worker.name}</td>
    <td>${getStatusText(worker.status)}</td>
    <td class="currency">${formatCurrency(payment.amount)}</td>
    <td>
        <button class="adjust-payment" data-id="${payment.id}">Корректировать</button>
        <button class="delete-payment" data-id="${payment.id}">Удалить</button>
    </td>
`;
                
                paymentsListBody.appendChild(row);
            });
            
            // Добавление обработчиков событий для кнопок
            document.querySelectorAll('.view-worker-payments').forEach(button => {
                button.addEventListener('click', (e) => {
                    const workerId = e.target.getAttribute('data-id');
                    showPaymentHistory(workerId);
                });
            });
            
            document.querySelectorAll('.delete-payment').forEach(button => {
                button.addEventListener('click', (e) => {
                    const paymentId = e.target.getAttribute('data-id');
                    deletePayment(paymentId);
                });
            });
            // Добавление обработчиков событий для кнопок корректировки
document.querySelectorAll('.adjust-payment').forEach(button => {
    button.addEventListener('click', (e) => {
        const paymentId = e.target.getAttribute('data-id');
        openAdjustmentModal(paymentId);
    });
});
        }
        
        
        // Генерация накладной для работника
        function generateInvoice() {
            const invoiceType = document.getElementById('invoice-type').value;
            const invoiceDate = document.getElementById('invoice-date').value;
            const invoiceNumber = document.getElementById('invoice-number').value;
            const foremanName = document.getElementById('foreman-name').value;
            
            if (!invoiceDate || !invoiceNumber || !foremanName) {
                alert('Пожалуйста, заполните все обязательные поля');
                return;
            }
            
            if (invoiceType === 'single') {
                const workerId = document.getElementById('invoice-worker').value;
                if (!workerId) {
                    alert('Пожалуйста, выберите работника');
                    return;
                }
                generateSingleInvoice(workerId, invoiceDate, invoiceNumber, foremanName);
            } else {
                const periodStart = document.getElementById('period-start').value;
                const periodEnd = document.getElementById('period-end').value;
                if (!periodStart || !periodEnd) {
                    alert('Пожалуйста, выберите период');
                    return;
                }
                generatePeriodInvoice(periodStart, periodEnd, invoiceDate, invoiceNumber, foremanName);
            }
        }
        
        // Генерация накладной на одного работника
        function generateSingleInvoice(workerId, invoiceDate, invoiceNumber, foremanName) {
            const worker = workers.find(w => w.id === workerId);
            if (!worker) {
                alert('Работник не найден');
                return;
            }
            
            const workerShifts = shifts.filter(shift => shift.workerId === workerId);
            const workerPayments = payments.filter(payment => payment.workerId === workerId);
            
            const totalEarned = calculateWorkerEarnings(workerId);
            const totalPaid = calculateWorkerPayments(workerId);
            const debt = totalEarned - totalPaid;
            
            // Создаем накладную
            const invoice = {
                id: Date.now().toString(),
                type: 'single',
                date: invoiceDate,
                number: invoiceNumber,
                workerId: workerId,
                foreman: foremanName,
                shifts: [...workerShifts],
                payments: [...workerPayments],
                totalEarned: totalEarned,
                totalPaid: totalPaid,
                debt: debt
            };
            
            // Добавляем накладную в список
            invoices.push(invoice);
            saveData();
            
            // Обновляем номер следующей накладной
            document.getElementById('invoice-number').value = getNextInvoiceNumber();
            
            // Отображаем накладную
            renderSingleInvoice(invoice);
        }
        // Правильный расчет выплат за текущий период
function calculatePaymentsForCurrentPeriod(workerId, startDate, endDate) {
    const worker = workers.find(w => w.id === workerId);
    if (!worker) return 0;
    
    // Получаем все смены работника за период
    const periodShifts = shifts.filter(shift => {
        if (shift.workerId !== workerId) return false;
        
        const shiftDate = new Date(shift.date);
        const start = new Date(startDate);
        const end = new Date(endDate);
        
        shiftDate.setHours(0, 0, 0, 0);
        start.setHours(0, 0, 0, 0);
        end.setHours(23, 59, 59, 999);
        
        return shiftDate >= start && shiftDate <= end;
    });
    
    if (periodShifts.length === 0) return 0;
    
    // Суммируем уже оплаченную сумму за эти смены
    return periodShifts.reduce((total, shift) => total + (shift.paidAmount || 0), 0);
}


        function generatePeriodInvoice(periodStart, periodEnd, invoiceDate, invoiceNumber, foremanName) {
    const includePrevious = document.getElementById('include-previous-payments').checked;
    
    // Получаем всех работников, которые работали в этот период
    const workersInPeriod = workers.filter(worker => {
        const hasShifts = shifts.some(shift => {
            const shiftDate = new Date(shift.date);
            const start = new Date(periodStart);
            const end = new Date(periodEnd);
            
            shiftDate.setHours(0, 0, 0, 0);
            start.setHours(0, 0, 0, 0);
            end.setHours(23, 59, 59, 999);
            
            return shift.workerId === worker.id && shiftDate >= start && shiftDate <= end;
        });
        return hasShifts;
    });
    
    if (workersInPeriod.length === 0) {
        alert('В выбранный период не было отработано смен');
        return;
    }
    
    // Рассчитываем суммы для каждого работника
    const workerDetails = workersInPeriod.map(worker => {
        const earned = calculateWorkerEarningsForPeriod(worker.id, periodStart, periodEnd);
        
        let paid = includePrevious ? 
            calculateWorkerPaymentsForPeriodAll(worker.id, periodStart, periodEnd) :
            calculatePaymentsForCurrentPeriod(worker.id, periodStart, periodEnd);
        
        // Убеждаемся, что выплаты не превышают заработок
        paid = Math.min(paid, earned);
        const debt = earned - paid;
        
        return {
            worker,
            earned,
            paid,
            debt
        };
    });
    
    // Общие суммы
    const totalEarned = workerDetails.reduce((sum, detail) => sum + detail.earned, 0);
    const totalPaid = workerDetails.reduce((sum, detail) => sum + detail.paid, 0);
    const totalDebt = workerDetails.reduce((sum, detail) => sum + detail.debt, 0);
    
    // Создаем накладную
    const invoice = {
        id: Date.now().toString(),
        type: 'period',
        date: invoiceDate,
        number: invoiceNumber,
        periodStart: periodStart,
        periodEnd: periodEnd,
        foreman: foremanName,
        workerDetails: workerDetails,
        totalEarned: totalEarned,
        totalPaid: totalPaid,
        totalDebt: totalDebt,
        includePrevious: includePrevious
    };
    
    // Добавляем накладную в список
    invoices.push(invoice);
    saveData();
    
    // Обновляем номер следующей накладной
    document.getElementById('invoice-number').value = getNextInvoiceNumber();
    
    // Отображаем накладную
    renderPeriodInvoice(invoice);
}
       
        
        // Отображение накладной на одного работника
        function renderSingleInvoice(invoice) {
            const invoicesContainer = document.getElementById('invoices-container');
            const worker = workers.find(w => w.id === invoice.workerId);
            
            if (!worker) return;
            
            const invoiceElement = document.createElement('div');
            invoiceElement.className = 'invoice';
            
            invoiceElement.innerHTML = `
                <div class="invoice-header">
                    <h2>ИП Vaskost_5</h2>
                    <h3>Накладная № ${invoice.number}</h3>
                    <p>на выплаку заработной платы</p>
                </div>
                
                <div class="invoice-details">
                    <div>
                        <p><strong>Дата составления:</strong> ${new Date(invoice.date).toLocaleDateString('ru-RU')}</p>
                        <p><strong>Составитель:</strong> ${invoice.foreman}</p>
                    </div>
                    <div>
                        <p><strong>Работник:</strong> ${worker.name}</p>
                        <p><strong>Должность:</strong> ${worker.position}</p>
                    </div>
                </div>
                
                <p><strong>Основание для выплаты:</strong> выполнение трудовых обязанностей по сменам</p>
                
                <table class="invoice-table">
                    <thead>
                        <tr>
                            <th>Дата смены</th>
                            <th>Количество смен</th>
                            <th>Ставка за смену</th>
                            <th>Сумма (₸)</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${invoice.shifts.map(shift => `
                            <tr>
                                <td>${new Date(shift.date).toLocaleDateString('ru-RU')}</td>
                                <td>${shift.count}</td>
                                <td class="currency">${formatCurrency(worker.rate)}</td>
                                <td class="currency">${formatCurrency(shift.count * worker.rate)}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
                
                <div class="invoice-total">
                    <p>Итого начислено: ${formatCurrency(invoice.totalEarned)}</p>
                    <p>Выплачено: ${formatCurrency(invoice.totalPaid)}</p>
                    <p>К выплате: ${formatCurrency(invoice.debt)}</p>
                </div>
                
                <div class="delete-button-container">
                    <button class="delete-invoice" data-id="${invoice.id}">Удалить накладную</button>
                </div>
            `;
            
            invoicesContainer.appendChild(invoiceElement);
            
            // Добавляем обработчик события для кнопки удаления
            const deleteButton = invoiceElement.querySelector('.delete-invoice');
            deleteButton.addEventListener('click', (e) => {
                const invoiceId = e.target.getAttribute('data-id');
                deleteInvoice(invoiceId);
            });
        }
        
        // Отображение накладной за период
function renderPeriodInvoice(invoice) {
    const invoicesContainer = document.getElementById('invoices-container');
    
    const invoiceElement = document.createElement('div');
    invoiceElement.className = 'invoice';
    
    invoiceElement.innerHTML = `
        <div class="invoice-header">
            <h2>ИП Vaskost_5</h2>
            <h3>Накладная № ${invoice.number}</h3>
            <p>на выплату заработной платы за период</p>
            ${invoice.includePrevious ? '<p style="color: #dc3545; font-style: italic;">(Включая выплаты за предыдущий период)</p>' : ''}
        </div>
        
        <div class="invoice-details">
            <div>
                <p><strong>Дата составления:</strong> ${new Date(invoice.date).toLocaleDateString('ru-RU')}</p>
                <p><strong>Составитель:</strong> ${invoice.foreman}</p>
                <p><strong>Период:</strong> ${new Date(invoice.periodStart).toLocaleDateString('ru-RU')} - ${new Date(invoice.periodEnd).toLocaleDateString('ru-RU')}</p>
            </div>
        </div>
        
        <p><strong>Основание для выплаты:</strong> выполнение трудовых обязанностей по сменам</p>
        
        <table class="invoice-table">
            <thead>
                <tr>
                    <th>Работник</th>
                    <th>Должность</th>
                    <th>Начислено (₸)</th>
                    <th>Выплачено (₸)</th>
                    <th>К выплате (₸)</th>
                </tr>
            </thead>
            <tbody>
                ${invoice.workerDetails.map(detail => `
                    <tr>
                        <td>${detail.worker.name}</td>
                        <td>${detail.worker.position}</td>
                        <td class="currency">${formatCurrency(detail.earned)}</td>
                        <td class="currency">${formatCurrency(detail.paid)}</td>
                        <td class="currency ${detail.debt > 0 ? 'negative' : 'positive'}">${formatCurrency(Math.abs(detail.debt))}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
        
        <div class='invoice-total'>
            <p><strong>Итого начислено:</strong> ${formatCurrency(invoice.totalEarned)}</p>
            <p><strong>Итого выплачено:</strong> ${formatCurrency(invoice.totalPaid)}</p>
            <p><strong>Итого к выплате:</strong> ${formatCurrency(invoice.totalDebt)}</p>
        </div>
        
        <div class="delete-button-container">
            <button class="delete-invoice" data-id="${invoice.id}">Удалить накладную</button>
        </div>
    `;
    
    invoicesContainer.appendChild(invoiceElement);
    
    // Добавляем обработчик события для кнопки удаления
    const deleteButton = invoiceElement.querySelector('.delete-invoice');
    deleteButton.addEventListener('click', (e) => {
        const invoiceId = e.target.getAttribute('data-id');
        deleteInvoice(invoiceId);
    });
}
        
        
        // Отображение всех накладных
        function renderInvoices() {
            const invoicesContainer = document.getElementById('invoices-container');
            invoicesContainer.innerHTML = '';
            
            if (invoices.length === 0) {
                invoicesContainer.innerHTML = '<p>Нет созданных накладных</p>';
                return;
            }
            
            // Сортируем накладные по дате (от новых к старым)
            const sortedInvoices = [...invoices].sort((a, b) => new Date(b.date) - new Date(a.date));
            
            sortedInvoices.forEach(invoice => {
                if (invoice.type === 'single') {
                    renderSingleInvoice(invoice);
                } else {
                    renderPeriodInvoice(invoice);
                }
            });
        }
        
        // Генерация акта о выплате
function generateAct() {
    const actDate = document.getElementById('act-date').value;
    const actNumber = document.getElementById('act-number').value;
    const foremanName = document.getElementById('act-foreman').value;
    const imageFile = document.getElementById('act-image').files[0];
    
    if (!actDate || !actNumber || !foremanName) {
        alert('Пожалуйста, заполните все обязательные поля');
        return;
    }
    
    // Получаем выплаты за выбранную дату
    const daysPayments = getPaymentsByDate(actDate);
    
    if (daysPayments.length === 0) {
        alert('В выбранную дату не было произведено выплат');
        return;
    }
    
    // Группируем выплаты по работникам
    const paymentsByWorker = {};
    let totalAmount = 0;
    
    daysPayments.forEach(payment => {
        if (!paymentsByWorker[payment.workerId]) {
            paymentsByWorker[payment.workerId] = 0;
        }
        paymentsByWorker[payment.workerId] += payment.amount;
        totalAmount += payment.amount;
    });
    
    // Проверяем, что есть выплаты
    if (totalAmount === 0) {
        alert('Сумма выплат равна нулю');
        return;
    }
    
    // Читаем изображение, если оно есть
    let imageData = null;
    if (imageFile) {
        const reader = new FileReader();
        reader.onload = function(e) {
            imageData = e.target.result;
            saveAct(actDate, actNumber, foremanName, paymentsByWorker, imageData, totalAmount);
        };
        reader.readAsDataURL(imageFile);
    } else {
        saveAct(actDate, actNumber, foremanName, paymentsByWorker, null, totalAmount);
    }
}
        
        // Сохранение акта
function saveAct(actDate, actNumber, foremanName, paymentsByWorker, imageData, totalAmount) {
    const act = {
        id: Date.now().toString(),
        date: actDate,
        number: actNumber,
        foreman: foremanName,
        payments: paymentsByWorker,
        image: imageData,
        totalAmount: totalAmount
    };
    
    acts.push(act);
    saveData();
    
    // Обновляем номер следующего акта
    document.getElementById('act-number').value = getNextActNumber();
    
    renderActs();
    
    // Очищаем поле изображения
    document.getElementById('act-image').value = '';
    document.getElementById('act-preview').style.display = 'none';
    document.getElementById('act-preview').innerHTML = '';
    
    alert('Акт успешно создан!');
}
        
        // Отображение актов
        function renderActs() {
            const actsContainer = document.getElementById('acts-container');
            actsContainer.innerHTML = '';
            
            if (acts.length === 0) {
                actsContainer.innerHTML = '<p>Нет созданных актов</p>';
                return;
            }
            
            // Сортируем акты по дате (от новых к старым)
            const sortedActs = [...acts].sort((a, b) => new Date(b.date) - new Date(a.date));
            
            sortedActs.forEach(act => {
                const actElement = document.createElement('div');
                actElement.className = 'invoice';
                
                let workersList = '';
                Object.keys(act.payments).forEach(workerId => {
                    const worker = workers.find(w => w.id === workerId);
                    if (worker) {
                        workersList += `<p>${worker.name} (${worker.position}): ${formatCurrency(act.payments[workerId])}</p>`;
                    }
                });
                
                actElement.innerHTML = `
                    <div class="invoice-header">
                        <h2>ИП Vaskost_5</h2>
                        <h3>Акт о выплате заработной платы № ${act.number}</h3>
                    </div>
                    
                    <div class="invoice-details">
                        <div>
                            <p><strong>Дата составления:</strong> ${new Date(act.date).toLocaleDateString('ru-RU')}</p>
                            <p><strong>Составитель:</strong> ${act.foreman}</p>
                        </div>
                    </div>
                    
                    <p><strong>Выплаты произведены следующим работникам:</strong></p>
                    ${workersList}
                    
                    <div class="invoice-total">
                        <p>Общая сумма выплат: ${formatCurrency(act.totalAmount)}</p>
                    </div>
                    
                    ${act.image ? `<img src="${act.image}" alt="Подписи работников" class="payment-image">` : ''}
                    
                    <div class="delete-button-container">
                        <button class="delete-act" data-id="${act.id}">Удалить акт</button>
                    </div>
                `;
                
                actsContainer.appendChild(actElement);
                
                // Добавляем обработчик события для кнопки удаления
                const deleteButton = actElement.querySelector('.delete-act');
                deleteButton.addEventListener('click', (e) => {
                    const actId = e.target.getAttribute('data-id');
                    deleteAct(actId);
                });
            });
        }
        
        // Удаление накладной
        function deleteInvoice(invoiceId) {
            if (!confirm('Вы уверены, что хотите удалить эту накладную?')) {
                return;
            }
            
            invoices = invoices.filter(inv => inv.id !== invoiceId);
            saveData();
            
            // Обновляем номер следующей накладной
            document.getElementById('invoice-number').value = getNextInvoiceNumber();
            
            // Перерисовываем накладные
            renderInvoices();
        }
        
        // Удаление акта
        function deleteAct(actId) {
            if (!confirm('Вы уверены, что хотите удалить этот акт?')) {
                return;
            }
            
            acts = acts.filter(act => act.id !== actId);
            saveData();
            
            // Обновляем номер следующего акта
            document.getElementById('act-number').value = getNextActNumber();
            
            renderActs();
        }
        
        // Добавление нового работника
        function addWorker() {
            const name = document.getElementById('worker-name').value.trim();
            const position = document.getElementById('worker-position').value.trim();
            const rate = parseInt(document.getElementById('worker-rate').value);
            
            if (!name || !position || isNaN(rate) || rate <= 0) {
                alert('Пожалуйста, заполните все поля корректно');
                return;
            }
            
            const newWorker = {
                id: Date.now().toString(),
                name,
                position,
                rate,
                status: WORKER_STATUS.ACTIVE
            };
            
            workers.push(newWorker);
            saveData();
            
            // Очистка полей ввода
            document.getElementById('worker-name').value = '';
            document.getElementById('worker-position').value = '';
            document.getElementById('worker-rate').value = '';
        }
        
        // Редактирование работника
        function editWorker(workerId) {
            const worker = workers.find(w => w.id === workerId);
            if (!worker) return;
            
            const newName = prompt('Введите новое ФИО работника:', worker.name);
            if (newName === null) return;
            
            const newPosition = prompt('Введите новую должность:', worker.position);
            if (newPosition === null) return;
            
            const newRate = parseInt(prompt('Введите новую ставку за смену (₸):', worker.rate));
            if (isNaN(newRate) || newRate <= 0) {
                alert('Некорректное значение ставки');
                return;
            }
            
            worker.name = newName.trim();
            worker.position = newPosition.trim();
            worker.rate = newRate;
            
            saveData();
        }
        
        // Увольнение работника
        function fireWorker(workerId) {
            const worker = workers.find(w => w.id === workerId);
            if (!worker) return;
            
            // Создаем модальное окно для выбора причины увольнения
            const modalOverlay = document.createElement('div');
            modalOverlay.className = 'modal-overlay';
            
            // Создаем список причин увольнения
            let reasonOptions = '';
            for (const [key, value] of Object.entries(FIRING_REASONS)) {
                reasonOptions += `<option value="${key}">${value}</option>`;
            }
            
            modalOverlay.innerHTML = `
                <div class="modal">
                    <h3>Увольнение ${worker.name}</h3>
                    <div>
                        <label for="firing-reason">Причина увольнения:</label>
                        <select id="firing-reason" style="width: 100%; margin: 10px 0; padding: 8px;">
                            ${reasonOptions}
                        </select>
                    </div>
                    <div>
                        <label for="firing-date">Дата увольнения:</label>
                        <input type="date" id="firing-date" value="${new Date().toISOString().split('T')[0]}" style="width: 100%; margin: 10px 0; padding: 8px;">
                    </div>
                    <div class="modal-buttons">
                        <button onclick="this.closest('.modal-overlay').remove()">Отмена</button>
                        <button onclick="window.completeFiring('${workerId}')" style="background: #dc3545;">Уволить</button>
                    </div>
                </div>
            `;
            
            document.body.appendChild(modalOverlay);
            
            // Глобальная функция для завершения увольнения
            window.completeFiring = function(workerId) {
                const reason = document.getElementById('firing-reason').value;
                const date = document.getElementById('firing-date').value;
                
                const worker = workers.find(w => w.id === workerId);
                if (worker) {
                    worker.status = reason === 'BLACKLIST' ? WORKER_STATUS.BLACKLIST : WORKER_STATUS.FIRED;
                    worker.firingReason = FIRING_REASONS[reason];
                    worker.firingDate = date;
                    saveData();
                }
                
                // Удаляем модальное окно
                const modal = document.querySelector('.modal-overlay');
                if (modal) modal.remove();
                
                // Удаляем глобальную функцию
                delete window.completeFiring;
            };
        }
        
        // Восстановление работника
        function restoreWorker(workerId) {
            const worker = workers.find(w => w.id === workerId);
            if (!worker) return;
            
            if (confirm(`Вы уверены, что хотите восстановить ${worker.name}?`)) {
                worker.status = WORKER_STATUS.ACTIVE;
                worker.firingReason = null;
                worker.firingDate = null;
                saveData();
            }
        }
        
        // Удаление работника
        function deleteWorker(workerId) {
            if (!confirm('Вы уверены, что хотите удалить этого работника? Все связанные смены и выплаты также будут удалены.')) {
                return;
            }
            
            // Удаляем работника
            workers = workers.filter(w => w.id !== workerId);
            
            // Удаляем связанные смены
            shifts = shifts.filter(s => s.workerId !== workerId);
            
            // Удаляем связанные выплаты
            payments = payments.filter(p => p.workerId !== workerId);
            
            // Удаляем связанные накладные
            invoices = invoices.filter(inv => inv.workerId !== workerId);
            
            saveData();
        }
        
        // Добавление новой смены
function addShift() {
    console.log('Функция addShift вызвана'); // Отладочное сообщение
    
    const date = document.getElementById('shift-date').value;
    const count = parseFloat(document.getElementById('shift-count').value);
    
    console.log('Дата:', date, 'Количество:', count); // Отладочное сообщение
    
    if (!date || isNaN(count) || count <= 0) {
        alert('Пожалуйста, заполните все поля корректно');
        return;
    }
    
    // Получаем выбранных работников
    const selectedWorkers = [];
    document.querySelectorAll('#shift-workers-checkboxes input:checked').forEach(checkbox => {
        selectedWorkers.push(checkbox.value);
        console.log('Выбран работник:', checkbox.value); // Отладочное сообщение
    });
    
    if (selectedWorkers.length === 0) {
        alert('Пожалуйста, выберите хотя бы одного работника');
        return;
    }
    
    console.log('Добавляем смены для работников:', selectedWorkers); // Отладочное сообщение
    
    // Добавляем смену для каждого выбранного работника
    selectedWorkers.forEach(workerId => {
        const newShift = {
            id: Date.now().toString() + '-' + workerId + '-' + Math.random().toString(36).substr(2, 9),
            date,
            workerId,
            count,
            paid: false,
            paidAmount: 0
        };
        
        shifts.push(newShift);
        console.log('Добавлена смена:', newShift); // Отладочное сообщение
    });
    
    saveData(); // ДОБАВИТЬ ЭТУ СТРОЧКУ - СОХРАНЕНИЕ ДАННЫХ
    console.log('Данные сохранены, всего смен:', shifts.length); // Отладочное сообщение
    
    // Очистка полей ввода
    document.getElementById('shift-date').value = '';
    document.getElementById('shift-count').value = '1';
    
    // Снимаем выделение с чекбоксов
    document.querySelectorAll('#shift-workers-checkboxes input:checked').forEach(checkbox => {
        checkbox.checked = false;
    });
    
    alert('Смены успешно добавлены!'); // Добавить уведомление
}
        
        
        // Удаление смены
        function deleteShift(shiftId) {
            if (!confirm('Вы уверены, что хотите удалить эту смену?')) {
                return;
            }
            
            shifts = shifts.filter(s => s.id !== shiftId);
            saveData();
        }
        
        // Добавление новой выплаты
        function addPayment() {
            const date = document.getElementById('payment-date').value;
            const amount = parseInt(document.getElementById('payment-amount').value);
            
            if (!date || isNaN(amount) || amount <= 0) {
                alert('Пожалуйста, заполните все поля корректно');
                return;
            }
            
            // Получаем выбранных работников
            const selectedWorkers = [];
            document.querySelectorAll('#payment-workers-checkboxes input:checked').forEach(checkbox => {
                selectedWorkers.push(checkbox.value);
            });
            
            if (selectedWorkers.length === 0) {
                alert('Пожалуйста, выберите хотя бы одного работника');
                return;
            }
            
            // Рассчитываем задолженность для каждого работника
            const workerDebts = selectedWorkers.map(workerId => {
                const earned = calculateWorkerEarnings(workerId);
                const paid = calculateWorkerPayments(workerId);
                return {
                    id: workerId,
                    debt: earned - paid
                };
            });
            
            const totalDebt = workerDebts.reduce((sum, worker) => sum + worker.debt, 0);
            
            if (amount > totalDebt) {
                alert(`Сумма выплаты (${formatCurrency(amount)}) превышает общую задолженность (${formatCurrency(totalDebt)})`);
                return;
            }
            
            // Распределяем выплату пропорционально задолженности
            workerDebts.forEach(worker => {
                const workerAmount = Math.round(amount * (worker.debt / totalDebt));
                
                if (workerAmount > 0) {
                    const newPayment = {
    id: Date.now().toString() + '-' + worker.id + '-' + Math.random().toString(36).substr(2, 9),
    date,
    workerId: worker.id,
    amount: workerAmount,
    shiftIds: [] // Добавляем пустой массив для привязки смен
};
                    
                    payments.push(newPayment);
                }
            });
            
            saveData();
            
            // Очистка полей ввода
            document.getElementById('payment-date').value = '';
            document.getElementById('payment-amount').value = '';
            
            // Снимаем выделение с чекбоксов
            document.querySelectorAll('#payment-workers-checkboxes input:checked').forEach(checkbox => {
                checkbox.checked = false;
            });
        }
        
        // Удаление выплаты
        function deletePayment(paymentId) {
            if (!confirm('Вы уверены, что хотите удалить эту выплату?')) {
                return;
            }
            
            payments = payments.filter(p => p.id !== paymentId);
            saveData();
        }
        // Открытие модального окна корректировки
function openAdjustmentModal(paymentId) {
    const payment = payments.find(p => p.id === paymentId);
    if (!payment) return;
    
    const worker = workers.find(w => w.id === payment.workerId);
    if (!worker) return;
    
    // Заполняем данные
    currentAdjustment = {
        paymentId: paymentId,
        workerId: payment.workerId,
        assignedShifts: [...(payment.shiftIds || [])],
        shiftAmounts: {...(payment.shiftAmounts || {})},
        unassignedShifts: []
    };
    
    // Находим все смены работника до даты выплаты (неоплаченные или частично оплаченные)
    const allShifts = shifts.filter(shift => 
        shift.workerId === payment.workerId && 
        new Date(shift.date) <= new Date(payment.date)
    ).sort((a, b) => new Date(a.date) - new Date(b.date));
    
    // Заполняем модальное окно
    document.getElementById('adjust-worker-name').textContent = `${worker.name} (${worker.position})`;
    document.getElementById('adjust-total-amount').textContent = formatCurrency(payment.amount);
    document.getElementById('adjust-payment-date').textContent = new Date(payment.date).toLocaleDateString('ru-RU');
    
    const container = document.getElementById('adjust-shifts-container');
    container.innerHTML = '';
    
    allShifts.forEach(shift => {
        const shiftCost = shift.count * worker.rate;
        const isAssigned = currentAdjustment.assignedShifts.includes(shift.id);
        const assignedAmount = currentAdjustment.shiftAmounts[shift.id] || 0;
        const remainingAmount = shiftCost - (shift.paidAmount || 0);
        
        const shiftDiv = document.createElement('div');
        shiftDiv.className = 'shift-adjust-item';
        shiftDiv.innerHTML = `
            <input type="checkbox" class="shift-checkbox" value="${shift.id}" 
                ${isAssigned ? 'checked' : ''} 
                ${remainingAmount <= 0 ? 'disabled' : ''}
                onchange="toggleShiftAssignment(this, ${shiftCost})">
            
            <div class="shift-info">
                <div>${new Date(shift.date).toLocaleDateString('ru-RU')} - ${shift.count} смен</div>
                <div style="font-size: 0.9em; color: #666;">
                    Ставка: ${formatCurrency(worker.rate)} | 
                    Стоимость: ${formatCurrency(shiftCost)} |
                    Осталось к оплате: ${formatCurrency(remainingAmount)}
                </div>
            </div>
            
            <div class="shift-amount">
                <input type="number" class="amount-input" value="${isAssigned ? assignedAmount : ''}" 
                    min="0" max="${Math.min(shiftCost, remainingAmount)}" step="1000" 
                    onchange="updateShiftAmount('${shift.id}', ${shiftCost}, ${remainingAmount})"
                    ${isAssigned ? '' : 'disabled'}
                    placeholder="Сумма">
            </div>
        `;
        
        container.appendChild(shiftDiv);
    });
    
    updateDistributionSummary();
    document.getElementById('adjustment-modal').style.display = 'flex';
}
// Обновление сводки распределения
function updateDistributionSummary() {
    const payment = payments.find(p => p.id === currentAdjustment.paymentId);
    if (!payment) return;
    
    let totalAssigned = 0;
    Object.values(currentAdjustment.shiftAmounts).forEach(amount => {
        totalAssigned += amount;
    });
    
    const remaining = payment.amount - totalAssigned;
    
    document.getElementById('adjust-assigned-amount').textContent = formatCurrency(totalAssigned);
    document.getElementById('adjust-remaining').textContent = formatCurrency(remaining);
    
    // Подсвечиваем остаток
    const remainingElement = document.getElementById('adjust-remaining');
    remainingElement.className = '';
    if (remaining > 0) {
        remainingElement.classList.add('positive');
    } else if (remaining < 0) {
        remainingElement.classList.add('negative');
    }
    
    // Автоматическое распределение остатка
    const autoDistributeBtn = document.getElementById('auto-distribute');
    if (remaining !== 0 && currentAdjustment.assignedShifts.length > 0) {
        autoDistributeBtn.style.display = 'block';
    } else {
        autoDistributeBtn.style.display = 'none';
    }
}

// Автоматическое распределение остатка
function autoDistributeRemaining() {
    const payment = payments.find(p => p.id === currentAdjustment.paymentId);
    if (!payment) return;
    
    let totalAssigned = 0;
    Object.values(currentAdjustment.shiftAmounts).forEach(amount => {
        totalAssigned += amount;
    });
    
    const remaining = payment.amount - totalAssigned;
    
    if (remaining === 0) return;
    
    // Распределяем остаток пропорционально доступному остатку по сменам
    const assignedShifts = currentAdjustment.assignedShifts.map(id => {
        const shift = shifts.find(s => s.id === id);
        const worker = workers.find(w => w.id === currentAdjustment.workerId);
        const shiftCost = shift.count * worker.rate;
        const alreadyPaid = shift.paidAmount || 0;
        const availableAmount = shiftCost - alreadyPaid;
        
        return {
            id: id,
            available: availableAmount,
            currentAmount: currentAdjustment.shiftAmounts[id] || 0
        };
    });
    
    const totalAvailable = assignedShifts.reduce((sum, shift) => sum + shift.available, 0);
    
    if (totalAvailable === 0) {
        alert('Нет доступной суммы для распределения!');
        return;
    }
    
    assignedShifts.forEach(shift => {
        const additionalAmount = Math.round(remaining * (shift.available / totalAvailable));
        const newAmount = shift.currentAmount + additionalAmount;
        const maxAllowed = shift.available;
        
        currentAdjustment.shiftAmounts[shift.id] = Math.min(newAmount, maxAllowed);
        
        // Обновляем поле ввода
        const input = document.querySelector(`.amount-input[onchange*="${shift.id}"]`);
        if (input) {
            input.value = currentAdjustment.shiftAmounts[shift.id];
        }
    });
    
    updateDistributionSummary();
}

// Обновление суммы для конкретной смены
function updateShiftAmount(shiftId, shiftCost, remainingAmount) {
    const input = document.querySelector(`.amount-input[onchange*="${shiftId}"]`);
    if (!input) return;
    
    let amount = parseInt(input.value) || 0;
    
    // Проверяем границы
    const maxAllowed = Math.min(shiftCost, remainingAmount);
    if (amount < 0) amount = 0;
    if (amount > maxAllowed) amount = maxAllowed;
    
    input.value = amount;
    currentAdjustment.shiftAmounts[shiftId] = amount;
    
    updateDistributionSummary();
}


// Обновление остатка суммы
function updateRemainingAmount() {
    const payment = payments.find(p => p.id === currentAdjustment.paymentId);
    const worker = workers.find(w => w.id === currentAdjustment.workerId);
    
    if (!payment || !worker) return;
    
    let assignedAmount = 0;
    currentAdjustment.assignedShifts.forEach(shiftId => {
        const shift = shifts.find(s => s.id === shiftId);
        if (shift) {
            assignedAmount += shift.count * worker.rate;
        }
    });
    
    const remaining = payment.amount - assignedAmount;
    document.getElementById('adjust-remaining').textContent = formatCurrency(remaining);
    document.getElementById('adjust-remaining').className = remaining >= 0 ? 'positive' : 'negative';
}

// Переключение привязки смены
function toggleShiftAssignment(checkbox, shiftCost) {
    const shiftId = checkbox.value;
    
    if (checkbox.checked) {
        currentAdjustment.assignedShifts.push(shiftId);
        // Устанавливаем сумму по умолчанию - всю стоимость смены, но не больше доступного остатка
        const shift = shifts.find(s => s.id === shiftId);
        const worker = workers.find(w => w.id === currentAdjustment.workerId);
        const remainingAmount = shiftCost - (shift.paidAmount || 0);
        
        currentAdjustment.shiftAmounts[shiftId] = Math.min(shiftCost, remainingAmount);
        
        // Активируем поле ввода
        const input = checkbox.parentNode.querySelector('.amount-input');
        input.disabled = false;
        input.value = currentAdjustment.shiftAmounts[shiftId];
    } else {
        currentAdjustment.assignedShifts = currentAdjustment.assignedShifts.filter(id => id !== shiftId);
        delete currentAdjustment.shiftAmounts[shiftId];
        
        // Деактивируем поле ввода
        const input = checkbox.parentNode.querySelector('.amount-input');
        input.disabled = true;
        input.value = '';
    }
    
    updateDistributionSummary();
}

// Сохранение корректировки
function saveAdjustment() {
    const payment = payments.find(p => p.id === currentAdjustment.paymentId);
    if (!payment) return;
    
    const worker = workers.find(w => w.id === currentAdjustment.workerId);
    if (!worker) return;
    
    // Проверяем, что сумма распределения равна выплате
    let totalAssigned = 0;
    Object.values(currentAdjustment.shiftAmounts).forEach(amount => {
        totalAssigned += amount;
    });
    
    if (totalAssigned !== payment.amount) {
        if (!confirm(`Сумма распределения (${formatCurrency(totalAssigned)}) не равна сумме выплаты (${formatCurrency(payment.amount)}). Продолжить сохранение?`)) {
            return;
        }
    }
    
    // Сохраняем привязку
    payment.shiftIds = currentAdjustment.assignedShifts;
    payment.shiftAmounts = {...currentAdjustment.shiftAmounts};
    
    // Обновляем статус оплаты смен
shifts.forEach(shift => {
    if (currentAdjustment.assignedShifts.includes(shift.id)) {
        const amountPaid = currentAdjustment.shiftAmounts[shift.id] || 0;
        shift.paidAmount = amountPaid;
        shift.paid = shift.paidAmount >= (shift.count * worker.rate);
    }
});
    
    saveData();
    closeAdjustmentModal();
    alert('Распределение выплаты сохранено!');
    
    // Обновляем отображение
    renderPaymentsList();
}



// Закрытие модального окна
function closeAdjustmentModal() {
    document.getElementById('adjustment-modal').style.display = 'none';
    // Сбрасываем текущую корректировку
    currentAdjustment = {
        paymentId: null,
        workerId: null,
        assignedShifts: [],
        shiftAmounts: {},
        unassignedShifts: []
    };
}

        // Инициализация при загрузке
        document.addEventListener('DOMContentLoaded', () => {
            // Установка текущей даты по умолчанию в полях ввода даты
            const today = new Date().toISOString().split('T')[0];
            document.getElementById('shift-date').value = today;
            document.getElementById('payment-date').value = today;
            document.getElementById('invoice-date').value = today;
            document.getElementById('period-start').value = today;
            document.getElementById('period-end').value = today;
            document.getElementById('act-date').value = today;
            
            // Обработчики для кнопок добавления
            document.getElementById('add-worker').addEventListener('click', addWorker);
            document.getElementById('add-shift').addEventListener('click', addShift);
            document.getElementById('add-payment').addEventListener('click', addPayment);
            document.getElementById('generate-invoice').addEventListener('click', generateInvoice);
            document.getElementById('generate-act').addEventListener('click', generateAct);
            
            // Загрузка данных
            updateAllDisplays();
            renderActs();
            renderInvoices();
            
            // Устанавливаем номера для накладных и актов
            document.getElementById('invoice-number').value = getNextInvoiceNumber();
            document.getElementById('act-number').value = getNextActNumber();
        });
    </script>
    <div class="modal-overlay" id="adjustment-modal" style="display: none;">
    <div class="modal" style="width: 800px; max-height: 80vh; overflow-y: auto;">
        <h3>Распределение выплаты по сменам</h3>
        
        <div class="worker-info">
            <h4>Работник: <span id="adjust-worker-name"></span></h4>
            <p>Дата выплаты: <span id="adjust-payment-date"></span></p>
            <p>Общая сумма выплаты: <span id="adjust-total-amount"></span></p>
        </div>
        
        <div class="adjustment-container">
            <h4>Выберите смены для распределения (отсортированы по дате):</h4>
            <div id="adjust-shifts-container"></div>
        </div>
        
        <div class="distribution-summary">
            <p><strong>Распределено: <span id="adjust-assigned-amount">0 ₸</span></strong></p>
            <p><strong>Остаток: <span id="adjust-remaining">0 ₸</span></strong></p>
            <button id="auto-distribute" onclick="autoDistributeRemaining()" 
                style="display: none; margin-top: 10px; padding: 8px 15px; background: #17a2b8; color: white; border: none; border-radius: 3px;">
                Автоматически распределить остаток
            </button>
        </div>
        
        <div class="modal-buttons" style="margin-top: 20px;">
            <button onclick="closeAdjustmentModal()" style="padding: 8px 15px; background: #6c757d; color: white; border: none; border-radius: 3px;">Отмена</button>
            <button onclick="saveAdjustment()" style="padding: 8px 15px; background: #28a745; color: white; border: none; border-radius: 3px;">Сохранить распределение</button>
        </div>
    </div>
</div>
</body>
</html>
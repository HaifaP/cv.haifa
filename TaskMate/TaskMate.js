let isLoginMode = true;
let currentLang = 'th';

const translations = {
    th: {
        auth_title: "เข้าสู่ระบบ Task Mate",
        auth_subtitle: "ผู้ช่วยจัดการงานและการเรียนของคุณในที่เดียว",
        lbl_name: "ชื่อ-นามสกุล",
        lbl_email: "อีเมล",
        lbl_pass: "รหัสผ่าน",
        auth_btn: "เข้าสู่ระบบ",
        auth_switch: "ยังไม่มีบัญชีใช่หรือไม่?",
        auth_switch_btn: "สมัครสมาชิก",
        
        signup_title: "สมัครสมาชิก Task Mate",
        signup_subtitle: "เริ่มต้นจัดระเบียบการเรียนของคุณวันนี้",
        signup_btn: "สมัครสมาชิก",
        signup_switch: "มีบัญชีอยู่แล้ว?",
        signup_switch_btn: "เข้าสู่ระบบ",

        menu_dashboard: "หน้าหลัก (Dashboard)",
        menu_subjects: "วิชาเรียน (Subjects)",
        menu_tasks: "จัดการงาน & จัดลำดับ",
        menu_group: "งานกลุ่ม (Group Tasks)",
        menu_exams: "ตารางสอบ (Exams)",
        menu_calendar: "ปฏิทิน & ซิงค์เครื่อง",

        welcome: "ยินดีต้อนรับกลับมา, Task Mate! 🦆",
        dash_desc: "นี่คือภาพรวมตารางงานและการเรียนที่คุณจัดระเบียบไว้วันนี้",
        progress_title: "ความคืบหน้างานรวม (Overall Task Progress)",
        stat_subjects: "วิชาทั้งหมด",
        stat_active_courses: "วิชาที่กำลังศึกษา",
        stat_tasks: "งานทั้งหมด",
        stat_managed: "งานในระบบ Task Mate",
        stat_exams: "สอบเร็วๆ นี้",
        stat_upcoming_exam: "การสอบ",
        stat_streak: "ความต่อเนื่อง",
        stat_days: "ใช้งานต่อเนื่อง 🦆",

        top_priority_title: "งานด่วนที่ต้องทำก่อน",
        view_all: "ดูทั้งหมด",
        quick_actions: "ทางลัดด่วน",
        qa_add: "เพิ่มงาน & จัดลำดับ",
        qa_group: "จัดการงานกลุ่ม",
        qa_sync: "ซิงค์ปฏิทินในเครื่อง",

        sub_title: "วิชาเรียนทั้งหมด",
        sub_add: "+ เพิ่มวิชาเรียน",
        task_main_title: "จัดการงาน & จัดลำดับความสำคัญอัตโนมัติ",
        task_main_desc: "ระบบ Task Mate จะวิเคราะห์ความเร่งด่วนและจัดเรียงงานสำคัญให้อยู่บนสุดเสมอ",
        task_add_btn: "+ เพิ่มงานใหม่",
        th_status: "สถานะ",
        th_priority: "ลำดับความสำคัญ (Task Mate Priority)",
        th_name: "ชื่องาน",
        th_subject: "วิชาเรียน",
        th_deadline: "กำหนดส่ง",
        th_action: "จัดการ",

        group_main_title: "ระบบงานกลุ่มและการทำงานร่วมกัน",
        group_main_desc: "จัดการโปรเจกต์กลุ่ม สมาชิกในทีม และติดตามงานกลุ่มได้ในที่เดียว",
        group_add_btn: "+ เพิ่มงานกลุ่ม",
        group_members: "สมาชิกในกลุ่ม:",
        group_deadline: "กำหนดส่ง:",

        exam_title: "ตารางสอบ (Exam Schedules)",
        exam_add: "+ เพิ่มตารางสอบ",

        cal_title: "ปฏิทินงาน & ซิงค์กับเครื่อง (Device Calendar Sync)",
        cal_desc: "เชื่อมตารางงานและกำหนดส่งเข้ากับปฏิทินในมือถือหรือคอมพิวเตอร์ของคุณ",
        sync_btn: "ซิงค์เข้าปฏิทินเครื่อง (.ics)",

        footer_desc: "แพลตฟอร์มจัดการงาน การบ้าน และตารางเรียนสำหรับนักศึกษาอัจฉริยะ ออกแบบด้วยความใส่ใจเพื่อชีวิตการเรียนที่ดีขึ้น",
        footer_links: "ลิงก์ด่วน (Quick Links)",
        footer_support: "ช่วยเหลือ & นโยบาย",
        footer_about: "เกี่ยวกับเรา (About Us)",
        footer_contact: "ติดต่อเรา (Contact)",
        footer_privacy: "นโยบายความเป็นส่วนตัว",
        footer_help: "ศูนย์ช่วยเหลือ (Help Center)",
        footer_user_section: "บัญชีผู้ใช้",
        footer_rights: "© 2026 Task Mate Student Task Management System. สงวนลิขสิทธิ์ทั้งหมด",

        modal_title: "เพิ่มงาน & ให้ระบบ Task Mate จัดลำดับ",
        group_modal_title: "เพิ่มงานกลุ่มใหม่ (Add Group Task)",
        modal_name: "ชื่องาน (Task Name)",
        modal_subject: "วิชาเรียน (Subject)",
        modal_date: "วันกำหนดส่ง (Deadline)",
        modal_importance: "ระดับความสำคัญ (Importance)",
        imp_high: "สูง (High)",
        imp_med: "ปานกลาง (Medium)",
        imp_low: "ต่ำ (Low)",
        btn_cancel: "ยกเลิก",
        btn_save: "บันทึกข้อมูล",

        p_high: "🔥 สำคัญเร่งด่วน (High)",
        p_med: "⚡ สำคัญปานกลาง (Medium)",
        p_norm: "ทั่วไป (Normal)",
        notif_title: "การแจ้งเตือนงาน (Reminders)"
    },
    en: {
        auth_title: "Log in to Task Mate",
        auth_subtitle: "Your personal academic and task management assistant.",
        lbl_name: "Full Name",
        lbl_email: "Email",
        lbl_pass: "Password",
        auth_btn: "Log In",
        auth_switch: "Don't have an account?",
        auth_switch_btn: "Sign Up",
        
        signup_title: "Create Task Mate Account",
        signup_subtitle: "Start organizing your study life today.",
        signup_btn: "Sign Up",
        signup_switch: "Already have an account?",
        signup_switch_btn: "Log In",

        menu_dashboard: "Dashboard",
        menu_subjects: "Subjects",
        menu_tasks: "Smart Tasks & Priority",
        menu_group: "Group Tasks",
        menu_exams: "Exam Schedules",
        menu_calendar: "Calendar & Sync",

        welcome: "Welcome back, Task Mate! 🦆",
        dash_desc: "Here is your academic overview and task priority list for today.",
        progress_title: "Overall Task Progress",
        stat_subjects: "Total Subjects",
        stat_active_courses: "Active courses",
        stat_tasks: "Total Tasks",
        stat_managed: "Managed in Task Mate",
        stat_exams: "Upcoming Exams",
        stat_upcoming_exam: "Exam schedule",
        stat_streak: "Study Streak",
        stat_days: "Days in a row 🦆",

        top_priority_title: "Top Priority Deadlines",
        view_all: "View all",
        quick_actions: "Quick Actions",
        qa_add: "Add Task & Priority",
        qa_group: "Manage Group Tasks",
        qa_sync: "Sync Device Calendar",

        sub_title: "All Subjects",
        sub_add: "+ Add Subject",
        task_main_title: "Smart Task Prioritization",
        task_main_desc: "Task Mate analyzes urgency and automatically ranks your important tasks at the top.",
        task_add_btn: "+ Add New Task",
        th_status: "Status",
        th_priority: "Task Mate Priority",
        th_name: "Task Name",
        th_subject: "Subject",
        th_deadline: "Deadline",
        th_action: "Actions",

        group_main_title: "Group Tasks & Collaboration",
        group_main_desc: "Manage team projects, assign members, and track group assignments in one place.",
        group_add_btn: "+ Add Group Task",
        group_members: "Members:",
        group_deadline: "Deadline:",

        exam_title: "Exam Schedules",
        exam_add: "+ Add Exam",

        cal_title: "Calendar & Device Calendar Sync",
        cal_desc: "Export and sync your study schedules and deadlines directly to your device calendar.",
        sync_btn: "Sync to Device Calendar (.ics)",

        footer_desc: "Smart task and assignment management platform designed with care to elevate your student life.",
        footer_links: "Quick Links",
        footer_support: "Support & Policy",
        footer_about: "About Us",
        footer_contact: "Contact",
        footer_privacy: "Privacy Policy",
        footer_help: "Help Center",
        footer_user_section: "User Account",
        footer_rights: "© 2026 Task Mate Student Task Management System. All rights reserved.",

        modal_title: "Add Task & Task Mate Prioritization",
        group_modal_title: "Add New Group Task",
        modal_name: "Task Name",
        modal_subject: "Subject",
        modal_date: "Deadline",
        modal_importance: "Importance",
        imp_high: "High",
        imp_med: "Medium",
        imp_low: "Low",
        btn_cancel: "Cancel",
        btn_save: "Save Data",

        p_high: "🔥 High Priority",
        p_med: "⚡ Medium Priority",
        p_norm: "Normal",
        notif_title: "Task Reminders"
    }
};

let tasks = JSON.parse(localStorage.getItem('taskmate_tasks')) || [
    { id: 1, name: 'Project Management Report', subject: 'IT Thinking Skills', date: '2026-10-15', importance: 'high', completed: false },
    { id: 2, name: 'Database ER Diagram Homework', subject: 'Math for IT', date: '2026-10-20', importance: 'medium', completed: false }
];

let groupTasks = JSON.parse(localStorage.getItem('taskmate_groups')) || [
    { id: 101, name: 'Web Front-End Assignment Project', members: ['Alex', 'Sarah', 'John'], date: '2026-10-18', completed: false }
];

let exams = JSON.parse(localStorage.getItem('taskmate_exams')) || [
    { id: 1, type: 'Midterm Exam', name: 'IT Thinking Skills (IT2301)', room: 'Room: 30-202 | Time: 09:00 - 11:00', date: '2026-06-22' }
];

let subjects = JSON.parse(localStorage.getItem('taskmate_subjects')) || [
    { id: 1, code: 'IT 2301', name: 'IT Thinking Skills', time: 'Class: Mon 13:10 - 16:00 (30-202)' },
    { id: 2, code: 'GE 2100', name: 'AI Quran for Quality Life', time: 'Class: Wed 07:30 - 08:50 (30-202)' },
    { id: 3, code: 'IT 2302', name: 'Math for IT', time: 'Class: Fri 09:00 - 11:50 (30-205)' }
];

function saveData() {
    localStorage.setItem('taskmate_tasks', JSON.stringify(tasks));
    localStorage.setItem('taskmate_groups', JSON.stringify(groupTasks));
    localStorage.setItem('taskmate_exams', JSON.stringify(exams));
    localStorage.setItem('taskmate_subjects', JSON.stringify(subjects));
}

function toggleAuthMode() {
    isLoginMode = !isLoginMode;
    const t = translations[currentLang];
    document.getElementById('auth-title').innerText = isLoginMode ? t.auth_title : t.signup_title;
    document.getElementById('auth-subtitle').innerText = isLoginMode ? t.auth_subtitle : t.signup_subtitle;
    document.getElementById('auth-btn').innerText = isLoginMode ? t.auth_btn : t.signup_btn;
    document.getElementById('auth-switch-text').innerText = isLoginMode ? t.auth_switch : t.signup_switch;
    document.getElementById('auth-switch-btn').innerText = isLoginMode ? t.auth_switch_btn : t.signup_switch_btn;
    document.getElementById('name-field').classList.toggle('hidden', isLoginMode);
}

function toggleLanguage() {
    currentLang = currentLang === 'th' ? 'en' : 'th';
    document.getElementById('lang-label').innerText = currentLang === 'th' ? 'EN' : 'TH';
    document.getElementById('auth-lang-btn').innerText = currentLang === 'th' ? 'EN' : 'TH';
    
    const t = translations[currentLang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if(t[key]) el.innerText = t[key];
    });

    toggleAuthMode();
    toggleAuthMode();

    renderTasks();
    renderGroupTasks();
    renderExams();
    renderSubjects();
    renderCalendar();
    renderNotifications();
}

function handleAuth(event) {
    event.preventDefault();
    const email = document.getElementById('input-email').value;
    if(email) document.getElementById('footer-user-info').innerText = `Logged in as: ${email}`;
    document.getElementById('auth-screen').classList.add('hidden');
    document.getElementById('app-wrapper').classList.remove('hidden');
    
    renderTasks();
    renderGroupTasks();
    renderExams();
    renderSubjects();
    renderCalendar();
    renderNotifications();
}

function logout() {
    document.getElementById('app-wrapper').classList.add('hidden');
    document.getElementById('auth-screen').classList.remove('hidden');
}

function switchTab(tabName) {
    document.querySelectorAll('[id^="tab-"]').forEach(el => el.classList.add('hidden'));
    document.getElementById(`tab-${tabName}`).classList.remove('hidden');

    document.querySelectorAll('.sidebar-link').forEach(link => {
        link.classList.remove('bg-ivory', 'dark:bg-stone-700', 'font-medium');
        if (link.getAttribute('data-tab') === tabName) {
            link.classList.add('bg-ivory', 'dark:bg-stone-700', 'font-medium');
        }
    });
    if(tabName === 'calendar') renderCalendar();
    if(tabName === 'dashboard' || tabName === 'assignments') renderTasks();
    if(tabName === 'grouptasks') renderGroupTasks();
    if(tabName === 'exams') renderExams();
    if(tabName === 'subjects') renderSubjects();
}

function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('-translate-x-full');
}

function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
    const icon = document.getElementById('theme-icon');
    icon.className = document.documentElement.classList.contains('dark') ? 'fa-solid fa-sun text-amber-400' : 'fa-solid fa-moon text-stone-700';
}

function toggleNotifications() {
    document.getElementById('notif-dropdown').classList.toggle('hidden');
}

function openTaskModal() { document.getElementById('task-modal').classList.remove('hidden'); }
function closeTaskModal() { document.getElementById('task-modal').classList.add('hidden'); }
function openGroupModal() { document.getElementById('group-modal').classList.remove('hidden'); }
function closeGroupModal() { document.getElementById('group-modal').classList.add('hidden'); }
function openExamModal() { document.getElementById('exam-modal').classList.remove('hidden'); }
function closeExamModal() { document.getElementById('exam-modal').classList.add('hidden'); }
function openSubjectModal() { document.getElementById('subject-modal').classList.remove('hidden'); }
function closeSubjectModal() { document.getElementById('subject-modal').classList.add('hidden'); }

function calculatePriorityScore(task) {
    const today = new Date();
    const deadline = new Date(task.date);
    const diffDays = Math.ceil((deadline - today) / (1000 * 60 * 60 * 24));
    let score = 0;
    if (diffDays <= 2) score += 100;
    else if (diffDays <= 7) score += 50;
    else score += 10;
    if (task.importance === 'high') score += 40;
    if (task.importance === 'medium') score += 20;
    return score;
}

function getSortedTasks() {
    return [...tasks].sort((a, b) => calculatePriorityScore(b) - calculatePriorityScore(a));
}

function handleAddTask(event) {
    event.preventDefault();
    tasks.push({
        id: Date.now(),
        name: document.getElementById('new-task-name').value,
        subject: document.getElementById('new-task-subject').value,
        date: document.getElementById('new-task-date').value,
        importance: document.getElementById('new-task-importance').value,
        completed: false
    });
    saveData();
    closeTaskModal();
    renderTasks();
    renderNotifications();
    event.target.reset();
}

function handleAddGroupTask(event) {
    event.preventDefault();
    groupTasks.push({
        id: Date.now(),
        name: document.getElementById('new-group-name').value,
        members: document.getElementById('new-group-members').value.split(',').map(m => m.trim()),
        date: document.getElementById('new-group-date').value,
        completed: false
    });
    saveData();
    closeGroupModal();
    renderGroupTasks();
    event.target.reset();
}

function handleAddExam(event) {
    event.preventDefault();
    exams.push({
        id: Date.now(),
        type: document.getElementById('new-exam-type').value,
        name: document.getElementById('new-exam-name').value,
        room: document.getElementById('new-exam-room').value,
        date: document.getElementById('new-exam-date').value
    });
    saveData();
    closeExamModal();
    renderExams();
    event.target.reset();
}

function handleAddSubject(event) {
    event.preventDefault();
    subjects.push({
        id: Date.now(),
        code: document.getElementById('new-sub-code').value,
        name: document.getElementById('new-sub-name').value,
        time: document.getElementById('new-sub-time').value
    });
    saveData();
    closeSubjectModal();
    renderSubjects();
    event.target.reset();
}

function toggleTaskComplete(id) {
    const task = tasks.find(t => t.id === id);
    if (task) { task.completed = !task.completed; saveData(); renderTasks(); }
}

function toggleGroupComplete(id) {
    const task = groupTasks.find(t => t.id === id);
    if (task) { task.completed = !task.completed; saveData(); renderGroupTasks(); }
}

function deleteTask(id) {
    tasks = tasks.filter(t => t.id !== id);
    saveData();
    renderTasks();
    renderNotifications();
}

function deleteGroupTask(id) {
    groupTasks = groupTasks.filter(t => t.id !== id);
    saveData();
    renderGroupTasks();
}

function deleteExam(id) {
    exams = exams.filter(e => e.id !== id);
    saveData();
    renderExams();
}

function deleteSubject(id) {
    subjects = subjects.filter(s => s.id !== id);
    saveData();
    renderSubjects();
}

function updateProgress() {
    const total = tasks.length + groupTasks.length;
    if (total === 0) {
        document.getElementById('progress-percent').innerText = '0%';
        document.getElementById('progress-bar-fill').style.width = '0%';
        return;
    }
    const completedCount = tasks.filter(t => t.completed).length + groupTasks.filter(t => t.completed).length;
    const percent = Math.round((completedCount / total) * 100);
    document.getElementById('progress-percent').innerText = percent + '%';
    document.getElementById('progress-bar-fill').style.width = percent + '%';
}

function renderNotifications() {
    const list = document.getElementById('notif-list');
    if(!list) return;
    list.innerHTML = '';
    tasks.forEach(t => {
        list.innerHTML += `<div class="p-2 rounded-xl bg-ivory dark:bg-stone-700 flex justify-between items-center"><div><p class="font-semibold">${t.name}</p><p class="text-[10px] text-stone-500">Deadline: ${t.date}</p></div><span class="px-1.5 py-0.5 rounded bg-moss/20 text-moss font-bold text-[10px]">Active</span></div>`;
    });
}

function syncWithDeviceCalendar() {
    let icsContent = "BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//Task Mate//Student Calendar//EN\n";
    tasks.forEach(task => {
        let cleanDate = task.date.replace(/-/g, '');
        icsContent += `BEGIN:VEVENT\nSUMMARY:${task.name} (${task.subject})\nDTSTART;VALUE=DATE:${cleanDate}\nDTEND;VALUE=DATE:${cleanDate}\nEND:VEVENT\n`;
    });
    icsContent += "END:VCALENDAR";
    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'task-mate-calendar.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    alert('Calendar synced successfully!');
}

function renderTasks() {
    const sorted = getSortedTasks();
    const tbody = document.getElementById('task-table-body');
    const dashList = document.getElementById('dashboard-priority-list');
    const statTotal = document.getElementById('stat-total-tasks');
    if(statTotal) statTotal.innerText = tasks.length;
    if(tbody) tbody.innerHTML = '';
    if(dashList) dashList.innerHTML = '';

    sorted.forEach((task, index) => {
        let badgeColor = 'bg-stone-100 text-stone-600';
        let priorityText = 'Normal';
        if (task.importance === 'high') { badgeColor = 'bg-red-100 text-red-600 font-bold'; priorityText = 'High Priority'; }
        else if (task.importance === 'medium') { badgeColor = 'bg-amber-100 text-amber-600'; priorityText = 'Medium Priority'; }

        if(tbody) {
            tbody.innerHTML += `<tr class="border-b border-garden dark:border-stone-700 ${task.completed ? 'opacity-50 line-through' : ''}"><td class="p-4 text-center"><input type="checkbox" ${task.completed ? 'checked' : ''} onclick="toggleTaskComplete(${task.id})" class="w-4 h-4 rounded cursor-pointer"></td><td class="p-4"><span class="px-2.5 py-1 rounded-full text-xs ${badgeColor}">#${index + 1} (${priorityText})</span></td><td class="p-4 font-semibold">${task.name}</td><td class="p-4 text-stone-500">${task.subject}</td><td class="p-4 font-medium">${task.date}</td><td class="p-4 text-center"><button onclick="deleteTask(${task.id})" class="text-red-500 hover:text-red-700 text-xs"><i class="fa-solid fa-trash"></i></button></td></tr>`;
        }
        if(dashList && index < 3) {
            dashList.innerHTML += `<div class="flex items-center justify-between p-3.5 rounded-2xl bg-ivory dark:bg-stone-700 text-sm shadow-sm"><div class="flex items-center space-x-3"><span class="px-2.5 py-1 rounded-xl bg-moss/20 text-moss font-bold text-xs">#${index + 1}</span><div><p class="font-semibold">${task.name}</p><p class="text-xs text-stone-500">${task.subject} • ${task.date}</p></div></div><span class="text-xs font-semibold px-2.5 py-1 rounded-xl ${badgeColor}">${priorityText}</span></div>`;
        }
    });
    updateProgress();
}

function renderGroupTasks() {
    const grid = document.getElementById('group-tasks-grid');
    if(!grid) return;
    grid.innerHTML = '';
    groupTasks.forEach(g => {
        let memberBadges = g.members.map(m => `<span class="px-2 py-0.5 bg-moss/20 text-moss rounded-lg text-xs font-semibold">${m}</span>`).join(' ');
        grid.innerHTML += `<div class="bg-white dark:bg-stone-800 p-6 rounded-3xl border border-garden dark:border-stone-700 shadow-sm ${g.completed ? 'opacity-50 line-through' : ''}"><div class="flex justify-between items-start mb-3"><div class="flex items-center space-x-2"><input type="checkbox" ${g.completed ? 'checked' : ''} onclick="toggleGroupComplete(${g.id})" class="w-4 h-4 rounded cursor-pointer"><h3 class="font-bold text-lg">${g.name}</h3></div><button onclick="deleteGroupTask(${g.id})" class="text-red-500 hover:text-red-700 text-xs"><i class="fa-solid fa-trash"></i></button></div><p class="text-xs text-stone-500 mb-2"><strong>Members:</strong> ${memberBadges}</p><p class="text-xs text-stone-600 dark:text-stone-300"><strong>Deadline:</strong> ${g.date}</p></div>`;
    });
    updateProgress();
}

function renderExams() {
    const container = document.getElementById('exams-container');
    if(!container) return;
    container.innerHTML = '';
    exams.forEach(exam => {
        container.innerHTML += `<div class="bg-white dark:bg-stone-800 p-6 rounded-3xl border border-garden dark:border-stone-700 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 shadow-sm"><div><span class="text-xs font-semibold bg-red-100 text-red-600 px-3 py-1 rounded-xl">${exam.type || 'Exam'}</span><h3 class="font-bold text-xl brand-font mt-2">${exam.name}</h3><p class="text-xs text-stone-500 mt-1">${exam.room}</p></div><div class="flex items-center space-x-4"><div class="text-left md:text-right"><span class="text-2xl font-bold text-moss brand-font">${exam.date}</span><p class="text-xs text-stone-500 mt-1">Exam Date</p></div><button onclick="deleteExam(${exam.id})" class="text-red-500 hover:text-red-700 text-sm p-2"><i class="fa-solid fa-trash"></i></button></div></div>`;
    });
}

function renderSubjects() {
    const container = document.getElementById('subjects-container');
    if(!container) return;
    container.innerHTML = '';
    subjects.forEach(sub => {
        container.innerHTML += `<div class="bg-white dark:bg-stone-800 p-6 rounded-3xl border border-garden dark:border-stone-700 shadow-sm relative"><div class="flex justify-between items-start"><span class="text-xs font-semibold bg-moss/20 text-moss px-3 py-1.5 rounded-xl">${sub.code}</span><button onclick="deleteSubject(${sub.id})" class="text-red-500 hover:text-red-700 text-xs"><i class="fa-solid fa-trash"></i></button></div><h3 class="font-bold text-xl brand-font mt-3">${sub.name}</h3><p class="text-xs text-stone-500 mt-2">${sub.time}</p></div>`;
    });
}

function renderCalendar() {
    const grid = document.getElementById('calendar-days-grid');
    if(!grid) return;
    grid.innerHTML = '';
    const month = parseInt(document.getElementById('calendar-month').value);
    const year = parseInt(document.getElementById('calendar-year').value);
    const firstDayIndex = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();

    for(let i=0; i<firstDayIndex; i++) {
        grid.innerHTML += `<div class="p-3 bg-stone-50/50 dark:bg-stone-900/20 rounded-2xl opacity-30"></div>`;
    }

    for(let day=1; day<=totalDays; day++) {
        const formattedDate = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const matchedTasks = tasks.filter(t => t.date === formattedDate);
        const hasTask = matchedTasks.length > 0;
        let dayStyle = 'bg-white dark:bg-stone-800 hover:bg-ivory dark:hover:bg-stone-700 border border-garden dark:border-stone-700';
        if(hasTask) dayStyle = 'bg-moss/20 dark:bg-moss/30 border border-moss font-semibold';

        let taskHtml = '';
        matchedTasks.forEach(t => {
            taskHtml += `<span class="block text-[10px] bg-moss text-white px-1.5 py-0.5 rounded-md mt-1 truncate" title="${t.name}">${t.name}</span>`;
        });

        grid.innerHTML += `<div class="p-2.5 ${dayStyle} rounded-2xl flex flex-col justify-between min-h-[85px] transition shadow-sm cursor-pointer"><div class="flex justify-between items-center"><span class="text-sm font-bold">${day}</span>${hasTask ? '<i class="fa-solid fa-circle-dot text-xs text-moss"></i>' : ''}</div><div class="space-y-0.5 mt-1 overflow-hidden">${taskHtml}</div></div>`;
    }
}
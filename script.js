// تأكد من أن الكود يعمل بعد تحميل الصفحة بالكامل
document.addEventListener('DOMContentLoaded', function() {
    // تحديد العناصر من الـ DOM
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // دالة لإضافة مهمة جديدة
    function addTask() {
        // الحصول على نص المهمة من input وإزالة المسافات الزائدة
        const taskText = taskInput.value.trim();

        // التحقق من أن المستخدم أدخل نص فعلاً
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // إنشاء عنصر <li> جديد للمهمة
        const li = document.createElement('li');
        li.textContent = taskText;

        // إنشاء زر الحذف للمهمة
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";

        // عند الضغط على زر الحذف، يتم إزالة المهمة من القائمة
        removeBtn.onclick = function() {
            taskList.removeChild(li);
        };

        // إضافة زر الحذف داخل <li>
        li.appendChild(removeBtn);

        // إضافة <li> إلى قائمة المهام
        taskList.appendChild(li);

        // تفريغ حقل الإدخال بعد إضافة المهمة
        taskInput.value = "";
    }

    // عند الضغط على زر "Add Task" يتم استدعاء addTask
    addButton.addEventListener('click', addTask);

    // إضافة المهمة عند الضغط على مفتاح Enter داخل input
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});

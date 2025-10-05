// تأكد من أن الكود يعمل بعد تحميل الصفحة بالكامل
document.addEventListener('DOMContentLoaded', function() {
    // تحديد العناصر من الـ DOM
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // دالة لإضافة مهمة جديدة
  function addTask() {
    // 1. احصل على النص من حقل الإدخال وأزل المسافات الزائدة
    const taskText = taskInput.value.trim();

    // 2. إذا لم يكتب المستخدم أي نص، أظهر تنبيه
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // 3. أنشئ عنصر <li> جديد ليعرض المهمة
    const li = document.createElement('li');
    li.textContent = taskText; // عرض نص المهمة داخل العنصر

    // 4. أنشئ زر لإزالة المهمة
    const removeBtn = document.createElement('button');
    removeBtn.textContent = "Remove"; // نص الزر
    removeBtn.className = "remove-btn"; // تعيين فئة CSS

    // 5. عند الضغط على الزر، احذف العنصر <li> من القائمة
    removeBtn.onclick = function() {
        taskList.removeChild(li);
    };

    // 6. أضف الزر داخل عنصر <li>
    li.appendChild(removeBtn);

    // 7. أضف عنصر <li> إلى قائمة المهام
    taskList.appendChild(li);

    // 8. أفرغ حقل الإدخال لتكون جاهزًا لإضافة مهمة جديدة
    taskInput.value = "";
}

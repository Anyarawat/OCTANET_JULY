const searchBox = document.getElementById("search-box");
        const listContainer = document.getElementById("list-container");
        const categorySelect = document.getElementById("categorySelect");

        function addPlan() {
            var category = categorySelect.value;
            if (searchBox.value === "") {
                alert("You Must Write Your Today's Plan 🤨😏 !!");
            } else {
                let li = document.createElement("li");
                li.innerHTML = searchBox.value;

                if (category === 'urgent') {
                    var bellIcon = document.createElement('i');
                    bellIcon.classList.add('fas', 'fa-bell', 'bell-icon');
                    li.insertBefore(bellIcon, li.firstChild);
                    li.classList.add('urgent');
                    listContainer.insertBefore(li, listContainer.firstChild);
                } else {
                    listContainer.appendChild(li);
                }

                let span = document.createElement("span");
                span.innerHTML = "\u00d7";
                span.classList.add('delete-icon'); // Add the 'delete-icon' class
                li.appendChild(span);
            }

            searchBox.value = "";
            categorySelect.value = "basic"; // Set the category to "Basic"
            saveData();
        }

        listContainer.addEventListener(
            "click",
            function (e) {
                if (e.target.tagName === "LI") {
                    e.target.classList.toggle("checked");
                    saveData();
                } else if (e.target.tagName === "SPAN") {
                    e.target.parentElement.remove();
                    saveData();
                }
            },
            false
        );

        function saveData() {
            localStorage.setItem("data", listContainer.innerHTML);
        }

        function showTask() {
            listContainer.innerHTML = localStorage.getItem("data");
        }

        showTask();
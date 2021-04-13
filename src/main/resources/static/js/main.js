$(document).ready(function () {
    restartAllUser();
    $('.AddBtn').on('click', function (event) {
        let user = {
            firstName: $("#firstName").val(),
            lastName: $("#lastName").val(),
            email: $("#email").val(),
            userName: $("#userName").val(),
            password: $("#password").val(),
            roles: getRole("#selectRole")

        }
        console.log(user);
        fetch("api/newUser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            },
            body: JSON.stringify(user)
        }).then(() => restartAllUser());
    });
});

function createTableRow(u) {
    let userRole = "";
    for (let i = 0; i < u.roles.length; i++) {
        userRole += " " + u.roles[i].role;
    }
    return `<tr id="user_table_row">
            <td>${u.id}</td>
            <td>${u.firstName}</td>
            <td>${u.lastName}</td>
            <td>${u.email}</td>
            <td>${u.username}</td>
            <td>${u.password}</td>
            <td>${userRole}</td>
            <td>
            <a  href="/api/${u.id}" class="btn btn-info eBtn" >Edit</a>
            </td>
            <td>
            <a  href="/api/delete/${u.id}" class="btn btn-danger delBtn">Delete</a>
            </td>
        </tr>`;
}

function getRole(address) {
    let data = [];
    $(address).find("option:selected").each(function () {
        data.push({id: $(this).val(), role: $(this).attr("name"), authority: $(this).attr("name")})
    });
    return data;
}

function restartAllUser() {
    let UserTableBody = $("#user_table_body")

    UserTableBody.children().remove();

    fetch("api/allusers")
        .then((response) => {
            response.json().then(data => data.forEach(function (item, i, data) {
                let TableRow = createTableRow(item);
                UserTableBody.append(TableRow);


                // $('.table .elBtn').on('click', function (event) {
                //     event.preventDefault();
                //     let href = $(this).attr("href");
                //
                //     $.get(href,function (country,status){
                //         $(".editUser #id").val(country.id)
                //         $(".editUser #firstNameEd").val(country.firstName)
                //         $(".editUser #lastNameEd").val(country.lastName)
                //         $(".editUser #emailEd").val(country.email)
                //         $(".editUser #userNameEd").val(country.userName)
                //         $(".editUser #passwordEd").val(country.password)
                //         $(".editUser #selectRoleEd").val(country.roles)
                //     });
                //     $(".editUser #exampleModal").modal();
                //
                //
                //     fetch("api/edit/{id}", {
                //         method: "PUT",
                //         headers: {
                //             "Content-Type": "application/json;charset=utf-8"
                //         }
                //     }).then(result => console.log(result))
                //         .then(() => restartAllUser());
                //
                // });

// тут описание двух кнопок и два феча( делит и эдит )
//                 $('.delBtn').on('click', function (event) {
//                     fetch("api/delete/{id}", {
//                         method: "DELETE",
//                         headers: {
//                             "Content-Type": "application/json;charset=utf-8"
//                         }
//                     }).then(result => console.log(result))
//                         .then(() => restartAllUser());
//                     });
                $('.delBtn').on('click', function (event) {
                    let href = $(this).attr('href');
                    fetch(href, {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json;charset=utf-8"
                        }
                    }).then(result => console.log(result))
                        .then(() => restartAllUser());
                });



            }));
        }).catch(error => {
        console.log(error);
    });
}


$(document).ready(function () {
    loadData();
    $('.dialog-modal').hide();
    $('.dialog').hide();
    $('.dialog-modal-update').hide();
    $('.dialog-update').hide();
    $('#btnAdd').click(btnAddOnClick);
    $('#btnCancel').click(btnCancelOnClick);
    $('.title-close-button').click(btnCancelOnClick);
    $('#btnSave').click(btnSaveOnClick);
    $('#btnEdit').click(btnEditOnClick);

})
function loadData() {
    $.ajax({
        url: "https://localhost:44311/select",
        method: "GET",
        contentType: "application/json",
        success: function (response) {
            $('.grid tbody').empty();
            $.each(response, function (index, item) {
                var trHTML = $(`<tr>
                                    <td>`+ item.id + `</td>
                                    <td>`+ item.name + `</td>
                                    <td>`+ item.birthday + `</td>
                                    <td>`+ `
                                            <button class='iconButton' onclick="UpdateStudent(`+ item.id + `)" id="btnUpdate"><i class="fas fa-pencil-alt"></i>&nbsp;&nbsp; Sửa</button>
                                            <button class='iconButton' onclick="deleteStudent(`+ item.id + `)" id="btnDelete"><i class="fas fa-trash-alt"></i>&nbsp;&nbsp; Xóa </button>` +`</td>
                                           
                                </tr>`);
                $('.grid tbody').append(trHTML);
            })
        }
    }).fail(function (response) {

    }
    )
}
//function UpdateStudent(id) {
//    $('.dialog-modal-update').show();
//    $('.dialog-update').show();
//    btnSaveUpdateOnClick(id);
//}
//function btnSaveUpdateOnClick(id, name, bd) {

//    name = $('#txtNameUpdate').val();
//    bd = $('#txtBirthdayUpdate').val();
//    var url = "/update?id=" + id;
//    $.ajax({
//        url: url,
//        contentType: "application/json",
//        method: "PUT",
//        contentType: "application/json",
//        dataType: "json"
//    }).done(function (response) {
//        loadData();
//        alert("Cập nhật thành công !");
//        $('.dialog-modal-update').hide();
//        $('.dialog-update').hide();
//    }).fail(function (response) {

//    }
//    )
//}
function deleteStudent(id) {
    var url = "/delete?id=" + id;
    $.ajax({
        url: url,
        contentType: "application/json",
        method: "DELETE",
        contentType: "application/json",
        dataType: "json"
        }).done(function (response) {
            loadData();
            alert("Xóa thành công !");
            $('.dialog-modal').hide();
            $('.dialog').hide();
        }).fail(function (response) {

        }
        )
}

function btnEditOnClick() {
    $('.dialog-modal').show();
    $('.dialog').show();
}

function btnAddOnClick() {
    $('.dialog-modal').show();
    $('.dialog').show();
}
function btnCancelOnClick() {
    $('.dialog-modal').hide();
    $('.dialog').hide();
}
function btnSaveOnClick() {
    var id = $('#txtId').val();
    var name = $('#txtName').val();
    var bd = $('#txtBirthday').val();

    if (!id || !name || !bd) {
        alert("Hãy vui lòng nhập đầy đủ thông tin !");
    }
    else {
        var student = {};
        student.id = $('#txtId').val();;
        student.name = $('#txtName').val();
        student.birthday = $('#txtBirthday').val();
        $.ajax({
            url: "  https://localhost:44311/create",
            method: "POST",
            data: JSON.stringify(student),
            contentType: "application/json",
            dataType: "json"
        }).done(function (response) {
            loadData();
            alert("Thêm thành công !");
            $('.dialog-modal').hide();
            $('.dialog').hide();
        }).fail(function (response) {

        }
        )

    }
}

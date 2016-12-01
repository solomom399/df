//var path = "http://localhost:2200/tlt-server/"
var path = "http://everymantechnologies.com/tlt-server/"
var users = []
var all_users = []
var usernames = ""
var emails = ""
var true_user = false
$(document).ready(function(){
    $.ajax({
        url: path+'all-users',
        type: "POST",
        cache: false,
        dataType: "JSON",
        success: function(r){
            if (r != "") {
                users[0] = r
                for (var i = 0; i < users[0].length; i++) {
                    usernames += users[0][i]['username']+" "
                    emails += users[0][i]['email']+" "
                    var offset = 0
                    var str = "."
                    var str_length = str.length
                    


                }
                console.log(emails)
            }
        }
    })
})


$("input[name=username]").keyup(function(){
    if ($(this).val() == "") {
        $(".username-test").text("")
    } else {
        if(usernames.indexOf($(this).val()) !== -1){
            $(".username-test").text($(this).val()+" is in use").css('color','red')
            true_user = false
        } else {
            $(".username-test").text($(this).val()+" is in free").css('color','green')
            true_user = true
        }
    }
})

$("input[name=email]").keyup(function(){
    if ($(this).val() == "") {
        $(".username-test").text("")
    } else {
        if(emails.indexOf($(this).val()) !== -1){
            $(".username-test").text($(this).val()+" is in use").css('color','red')
            true_user = false
        } else {
            $(".username-test").text($(this).val()+" is in free").css('color','green')
            true_user = true
        }
    }
})



$(".show-side-bar").click(function(){
    $(".side-bar").animate({
        left:'0px'
    },"fast")
})


$(".hide-side-bar, .side-bar").click(function(){
    $(".side-bar").animate({
        left:'-100%'
    },"fast")
})


$(".second-form").submit(function(){
    $(".username-test").text("")
    var alpha_num_match = /^[0-9a-zA-Z]*$/;
    var alpha_match = /^[a-zA-Z ]+$/;
    var num_match = /^[0-9]+$/;
    var phone_i = /^[+0-9]+$/;
    var mail_match = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
    var url_match = /\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i

    var username = $("input[name=username]")
    var phone = $("input[name=phone]")
    var email = $("input[name=email]")
    var error = $(".er")

    if(username.val() == ""){
        username.css(
                "border","1px solid red"
            )
        username.effect('shake')
        return false
    } else if (!username.val().match(alpha_num_match)) {
        username.css(
                "border","1px solid red"
            )
        username.effect('shake')
        error.text("Enter your username properly (user1234)").css(
                "visibility","visible"
            )
        return false
    } else if (true_user == false) {
        username.css(
                "border","1px solid red"
            )
        username.effect('shake')
        error.text("Sorry the username you choose is in use").css(
                "visibility","visible"
            )
        return false
    } else if (phone.val() == "") {
        phone.css(
                "border","1px solid red"
            )
        phone.effect('shake')
        return false
    } else if (!phone.val().match(num_match)) {
        phone.css(
                "border","1px solid red"
            )
        phone.effect('shake')
        error.text("Enter your phone number properly (08181701047)").css(
                "visibility","visible"
            )
        return false
    } else if (email.val() == "") {
        email.css(
                "border","1px solid red"
            )
        email.effect('shake')
        return false
    } else if (true_user == false) {
        email.css(
                "border","1px solid red"
            )
        email.effect('shake')
        error.text("Sorry the Email address you enter is in use").css(
                "visibility","visible"
            )
        return false
    } else if (!email.val().match(mail_match)) {
        email.css(
                "border","1px solid red"
            )
        email.effect('shake')
        error.text("Enter your email address properly (example@mail.com)").css(
                "visibility","visible"
            )
        return false
    } else {
        error.text("").css(
                "visibility","hidden"
            )
        $(this).find('.signup').html('Signing up...')
        formData = new FormData(this)
        $.ajax({
          context: this,
          type: "POST",
          url: path+"signup",
          data: new FormData(this),
          contentType: false,
             cache: false,
       processData:false,
          success: function(r) {
                $(this).find('.signup').html('Join')
                if (r != "" && r == "Inserted") {
                    error.text("Successful...goto your email to get your password. Thank you.").css({
                        "visibility": "visible",
                        "background": "green"
                    })
                    //location.href = "data/profile.html"
                } else {
                    error.text("Sorry!...there was an error please try again").css(
                        "visibility","visible"
                    )
                }
            }
        })
    }
    


    return false
})



$(".second-form input").focusin(function(){
    
    $(this).css(
            "border", "1px solid #46b8da"
        )
})



$(".first-form").submit(function(){
    
    var alpha_num_match = /^[0-9a-zA-Z]*$/;
    var alpha_match = /^[a-zA-Z ]+$/;
    var num_match = /^[0-9]+$/;
    var phone_i = /^[+0-9]+$/;
    var mail_match = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
    var url_match = /\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i

    var username = $("input[name=username]")
    var password = $("input[name=password]")
    var error = $(".er")

    if(username.val() == ""){
        username.css(
                "border","1px solid red"
            )
        username.effect('shake')
        return false
    } else if (password.val() == "") {
        password.css(
                "border","1px solid red"
            )
        password.effect('shake')
        return false
    } else {
        error.text("").css(
                "visibility","hidden"
            )
        $(this).find('.login').html('Loging in...')
        formData = new FormData(this)
        $.ajax({
          context: this,
          type: "POST",
          url: path,
          data: new FormData(this),
          contentType: false,
             cache: false,
       processData:false,
       dataType: "JSON",
       crossDomain: true,
          success: function(r) {
                $(this).find('.login').html('Login')
                if (r != "") {
                    //localStorage.clear()
                    
                    localStorage.setItem("login",true);
                    localStorage.setItem('user-email', r.email)
                    localStorage.setItem('username', r.username)
                    localStorage.setItem('user-phone', r.phone)
                    localStorage.setItem('user-image', r.image)
                    localStorage.setItem('status', r.status)
                    location.href = "data/profile.html"
                } else {
                    error.text("Sorry!...there was an error please try again").css(
                        "visibility","visible"
                    )
                }
            }
        })
    }
    


    return false
})

$(".username").html('<i class="material-icons">person</i> '+localStorage.getItem('username'))
$(".user-email").html('<i class="material-icons">email</i> '+localStorage.getItem('user-email'))
$(".user-phone").html('<i class="material-icons">call</i> '+localStorage.getItem('user-phone'))

if(localStorage.getItem('user-image') == "") {
    $(".user-image").attr("src", "../image/user.png")
} else {
    $(".user-image").attr("src", path+"upload/"+localStorage.getItem('user-image'))
}

$(".tool-btn").click(function(){
    $(".nav-tool").toggleClass('show-nav-tool')
})


$(window).load(function() {
    $(document).ready(function(){
        setTimeout(function(){
            $('.preloader').addClass('hide-preloader');
        }, 2000);
    })
   
 
});


$(".side-bar-menu ul li a").click(function(){
    $(".side-bar-menu ul li").removeClass('on')
    $(this).parent().addClass('on')
    $(".side-bar").animate({
        left:'-100%'
    },"fast")
})


$(".side-bar-menu ul li a:active").css("border", "4px solid red")

function showdata () {
        $(".all-user").html( '<tr><td colspan="8"><center>Loading...<img src="../image/load.gif"></center></td></tr>')

    $.ajax({
        context: this,
        url: path+"all-users",
        type: "POST",
        data: {search_key : 1},
        cashe: false,
        dataType: "JSON",
        success: function(r){
                    

            if (r != "") {
                    $("#datatable").dataTable({
                        data: r,
                        columns:[
                            {'data' : 'id'},
                            {'data' : 'username'},
                            {'data' : 'phone'},
                            {'data' : 'email'},
                            {'data' : 'remove'}
                        ],
                        destroy: true
                    })
                    //console.log(r)
                
            } else {
                $(".all-user").html(
                        '<tr><td colspan="8"><center>No Data was Found</center></td></tr>'
                    )
            }
        }
    })

}

$(document).ready(function(){
    showdata()
})

$(".all-user").on('click', '.delet', function(){
    var pin = $(this).attr('pin')
    $.ajax({
        url: path+"delete-user",
        type: "POST",
        data: {pin : pin},
        success: function(r){
            if (r != "" && r == "delete") {
                showdata()
            }
        }
    })
})



var x = 0
$(".list_next").css("visibility", "hidden")
$(".list_previous").css("visibility", "hidden")

function loadUsersList(number_of_record) {
    $(".user-list").html('<center>Loading...<img src="../image/load.gif"></center>')
    $.ajax({
        url: path+"list-users",
        type: "POST",
        data: {index : x},
        dataType: "JSON",
        success: function(r){
            if (r != "") {
                //console.log(r)
                var output_html = ""
                var output_html_two = ""
                var total_row
                for (var i = 0; i < r.length; i++) {
                    if(r[i]['on_group'] == "1") {
                        output_html_two += '<div class="form-group">'+
                                        //'<input type="radio" name="user_list" id="'+r[i]['input_id']+'" value="'+r[i]['username']+'">'+
                                        ' <label for="'+r[i]['input_id']+'" style="color: green;">'+r[i]['username']+'</label>'+
                                    '</div>'
                    }   else {
                        output_html += '<div class="form-group">'+
                                        '<input type="radio" name="user_list" id="'+r[i]['input_id']+'" value="'+r[i]['username']+'">'+
                                        ' <label for="'+r[i]['input_id']+'">'+r[i]['username']+'</label>'+
                                    '</div>'
                    }
                    
                    total_row = r[i]['total_row']
                }
                //console.log(total_row)
                if (output_html == "") {
                    output_html = "No member found"
                }
                if(x < (parseInt(total_row) - parseInt(number_of_record))) {
                    $(".list_next").css("visibility", "visible")
                } else {
                    $(".list_next").css("visibility", "hidden")
                }

                var prev = x - parseInt(number_of_record)
                if(prev >= 0) {
                    $(".list_previous").css("visibility", "visible")
                } else {
                    $(".list_previous").css("visibility", "hidden")
                }
                $(".user-list").html(
                        '<h4>Already in Group</h4>'+
                        output_html_two+
                        '<hr>'+
                        '<h4>Not in Group</h4>'+
                        output_html
                    )
            } else {
                $(".user-list").html("Sorry!...Nothing is found")
            }
        }
    })
}



$(".list_next").click(function(){
    x += 40
    loadUsersList(40)
})


$(".list_previous").click(function(){
    x -= 40
    loadUsersList(40)
})


$("#leader, #asst_leader, #vip").click(function(){
    var ref = $(this).attr("id")
    $(".user-list").attr("ref", ref)

    loadUsersList(40)
})


$(".user-list").on('change', 'input[name=user_list]', function(){
    var ref_id = $(".user-list").attr("ref")
    var input_value = $(this).val()
    //alert(input_value)
    $("#"+ref_id).val(input_value)
})










$(".group_form").submit(function(){
    var group_name = $("input[name=group_name]")
    var group_leader = $("input[name=group_leader]")
    var group_asst_leader = $("input[name=group_asst_leader]")
    var group_vip = $("input[name=group_vip]")
    
    if (group_name.val() == "") {
        group_name.css("border", "1px solid red")
        group_name.effect('shake')

        return false
    } else if (group_leader.val() == "") {
        group_leader.css("border", "1px solid red")
        group_leader.effect('shake')

        return false
    } else if (group_asst_leader.val() == "") {
        group_asst_leader.css("border", "1px solid red")
        group_asst_leader.effect('shake')

        return false
    } else if (group_vip.val() == "") {
        group_vip.css("border", "1px solid red")
        group_vip.effect('shake')

        return false
    } else {
        $.ajax({
          context: this,
          type: "POST",
          url: path+"create-group",
          data: new FormData(this),
          contentType: false,
             cache: false,
       processData:false,
       //dataType: "JSON",
       crossDomain: true,
          success: function(r) {
               if (r != "" && r != "error") {
                    $(".msg").html(r+" has been created successfully.")
                    $(this).trigger('reset')
               } else {
                    $(".msg").html("Sorr!...there was an error Creating the group. Please try again")
               }
            }
        })
    }

    return false
})


$(".group_form input").focusin(function(){
    $(this).css("border", "1px solid #46b8da")
})


var p = 0;
function allgroups (number_of_record) {
    $.ajax({
        url: path+"all-groups",
        type: "POST",
        data: {index : p},
        dataType: "JSON",
        success: function(r){
            if (r != "") {
                //console.log(r)
                var groups = ""
                var group_member = ""
                for (var i = 0; i < r.length; i++) {

                    groups += '<div class="panel panel-default">'+
                                    '<div class="panel-heading">'+
                                        '<h4 class="panel-title">'+
                                            '<a role="button" data-toggle="collapse" data-parent="#accordion" href="#'+r[i]['id']+'">'+
                                                r[i]['group']+
                                            '</a>'+
                                        '</h4>'+
                                    '</div>'+
                                    '<div id="'+r[i]['id']+'" class="panel-collapse collapse">'+
                                        '<div class="panel-body">'+
                                    '<ul>'
                    for (var x = 0; x < r[i]['member'].length; x++) {
                        groups += '<li>'+
                                        r[i]['member'][x]+
                                        '<button group_name="'+r[i]['group']+'" key="'+r[i]['member'][x]+'" class="btn btn-danger pull-right" style="height: 20px; padding: 3px; font-size: 11px;">Remove</button>'+
                                '</li>'
                    }

                    groups +='</ul>'+
                                '<button group_id="'+r[i]['group_id']+'" group_name="'+r[i]['group']+'" class="btn btn-info form-control pick-users" data-toggle="modal" data-target="#my_Modal"><span class="glyphicon glyphicon-plus"></span> Add member</button>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'
                    total_row = r[i]['total_row']
                }
                //console.log(total_row)
                if(p < (parseInt(total_row) - parseInt(number_of_record))) {
                    $(".all_next").html('<button class="btn btn-default"><i class="material-icons">navigate_next</i></button>')
                } else {
                    $(".all_next").html("")
                }

                var prev = p - parseInt(number_of_record)
                if(prev >= 0) {
                    $(".all_previous").html('<button class="btn btn-default"><i class="material-icons">navigate_before</i></button>')
                } else {
                    $(".all_previous").html("")
                }
                
                $(".all-group-div").html(groups)
            }
        }
    })
}




$(".agroup").click(function(){
    allgroups(12)
})

$(".all_next").on('click', 'button', function(){
    p += 12
    allgroups(12)
})


$(".all_previous").on('click', 'button', function(){
    p -= 12
    allgroups(12)
})


$(".panel-group").on('click', '.panel ul li button', function(){
    var key = $(this).attr('key')
    var group_name = $(this).attr('group_name')
    $.ajax({
      context: this,
      type: "POST",
      url: path+"remove-from-list",
      data: {key : key, group_name : group_name},
       //dataType: "JSON",
       crossDomain: true,
          success: function(r) {
               if (r != "" && r != "error") {
                    allgroups(12)
                    alert(r)
               }
            }
        })
})













var q = 0
function loadMember(number_of_record) {
    $(".member-div").html('<center>Loading...<img src="../image/load.gif"></center>')
    $.ajax({
        url: path+"add-member",
        type: "POST",
        data: {index : q},
        dataType: "JSON",
        success: function(r){
             if (r != "") {
                //console.log(r)
                var output_html = ""
                var total_row
                for (var i = 0; i < r.length; i++) {
                    output_html += '<div class="form-group">'+
                                        '<input type="checkbox" name="user_list[]" id="'+r[i]['input_id']+'" value="'+r[i]['username']+'">'+
                                        ' <label for="'+r[i]['input_id']+'">'+r[i]['username']+'</label>'+
                                    '</div>'
                    
                    
                    total_row = r[i]['total_row']
                }
                //console.log(total_row)
                if (output_html == "") {
                    output_html = "No users found"
                }
                if(q < (parseInt(total_row) - parseInt(number_of_record))) {
                    $(".control-right").html('<button class="btn btn-default"><i class="material-icons">navigate_next</i></button>')
                } else {
                    $(".control-right").html("")
                }

                var prev = q - parseInt(number_of_record)
                if(prev >= 0) {
                    $(".control-left").html('<button class="btn btn-default"><i class="material-icons">navigate_before</i></button>')
                } else {
                    $(".control-left").html("")
                }
                $(".member-div").html(output_html)
            } else {
                $(".member-div").html("Sorry!...Nothing is found")
            }
        }
    })
}


$(".all-group-div").on('click', '.pick-users', function(){
    $("input[name=group_name]").val($(this).attr('group_name'))
    $("input[name=group_id]").val($(this).attr('group_id'))
    loadMember(40)
})

$(".control-right").on('click', 'button', function(){
    q += 40
    loadMember(40)
})


$(".control-left").on('click', 'button', function(){
    q -= 40
    loadMember(40)
})


$(".member-form").submit(function(){
    var cl = $(".member-div").find("input[name='user_list[]']:checked").length

    if (cl > 3) {
        alert("maximum is 12")
        return false
    } else {
       $.ajax({
          context: this,
          type: "POST",
          url: path+"add-more-member",
          data: new FormData(this),
          contentType: false,
             cache: false,
       processData:false,
       //dataType: "JSON",
       crossDomain: true,
          success: function(r) {
               if (r != "") {
                    alert(r)
                }
            }
        }) 
    }
    return false
})

function loadUserDetails() {
    var username = localStorage.getItem('username')
    $(".e-btn").html('Loading Details...Please wait')
    $.ajax({
        context: this,
        type: "POST",
        url: path+"remove-from-list",
        data: {key_ref : 1, username : username},
        cache: false,
       dataType: "JSON",
       crossDomain: true,
        success: function(r) {
            if (r != "") {
                $("input[name=profile_email]").val(r.email)
                $("input[name=profile_phone]").val(r.phone)
                $("input[name=username]").val(r.username)
                $(".user-email").html('<i class="material-icons">email</i> '+r.email)
                $(".user-phone").html('<i class="material-icons">call</i> '+r.phone)


                if(r.image == "") {
                    $("#output").attr("src", "../image/user.png")
                    $(".user-image").attr("src", "../image/user.png")
                } else {
                    $("#output").attr("src", path+"upload/"+r.image)
                    $(".user-image").attr("src", path+"upload/"+r.image)
                }

                $(".e-btn").html("Update")
            }
        }
    })
}


$(".profil_han").click(function(){
    loadUserDetails()
})

$("#profile_image").change(function(event){
    var objectUrl = URL.createObjectURL(event.target.files[0])
    if($(this).val() != "") {
        $("#output").attr("src", objectUrl)
    } else {
        $("#output").attr("src", "../image/user.png")
    }
    
})


$(".update-form").submit(function(){
    if ($("#profile_image").val() == "") {
        return false
    } else {
        $(".upm").html('Updating...<img src="../image/load.gif">')
        $.ajax({
            context: this,
            type: "POST",
            url: path+"profile-edit",
            data: new FormData(this),
            contentType: false,
             cache: false,
           processData:false,
           dataType: "JSON",
           crossDomain: true,
            success: function(r) {
                if (r != "") {
                    $(".upm").html(r.msg)
                    loadUserDetails()
                    localStorage.setItem('user-image', r.image)
                }
            }
        })
    }
    return false
})


var scrolled = false


function scrollBottom () {
    if (!scrolled) {
        $(".chat-box").animate({ scrollTop: $(".chat-box")[0].scrollHeight }, 'fast')
    }
}

$(".chat-box").on('scroll', function(){
    scrolled = true
})


function updateLoungeRoom() {
    $.ajax({
        url: path+"lounge-chat",
        type: "POST",
        cache: false,
        timeout: 8640000000,
        success: function (r){
            $(".chat-box").html(r)
            scrollBottom()
            setTimeout(updateLoungeRoom, 1000)
        }
    })
}


$("input[name=username]").val(localStorage.getItem('username'))
$("input[name=sender_image]").val(localStorage.getItem('user-image'))
$(".lounge-chat-form").submit(function(){
    $(this).find('button').html('Sending...<span class="glyphicon glyphicon-send"></span>')
    if($("textarea[name=message]").val() == "") {
        return false
    } else {
        $.ajax({
            context: this,
            type: "POST",
            url: path+"insert-lounge",
            data: new FormData(this),
            contentType: false,
             cache: false,
           processData:false,
           //dataType: "JSON",
           crossDomain: true,
            success: function(r) {
                if (r != "") {
                    $("textarea[name=message]").val("")
                    scrollBottom()
                    scrolled = false
                    $(this).find('button').html('Send <span class="glyphicon glyphicon-send"></span>')
                }
            }
        })
    }

    return false
})

updateLoungeRoom()


$(".broadcast-form").submit(function(){
    if($("textarea[name=broadcast]").val() == "" || $("input[name=subject]").val() == "") {
        return false
    } else {
        $.ajax({
            context: this,
            type: "POST",
            url: path+"broadcast",
            data: new FormData(this),
            contentType: false,
             cache: false,
           processData:false,
           //dataType: "JSON",
           crossDomain: true,
            success: function(r) {
                if (r != "") {
                    alert(r)
                    $("textarea[name=broadcast]").val("")
                    $("input[name=subject]").val("")
                }
            }
        })
    }
    return false
})


if (localStorage.getItem('notifcation') != null) {
    $(".notif").css('visibility', 'visible')
} else {
    $(".notif").css('visibility', 'hidden')
}

function loadNotification () {
    $.ajax({
        url: path+"notifcation",
        type: "POST",
        cache: false,
        timeout: 10000,
        success: function (r){
            if(r == '1'){
                localStorage.setItem('notifcation', true)
                $(".notif").css('visibility', 'visible')
            }
            setTimeout(loadNotification, 3000)
            
        }
    })
}

loadNotification()

$(".notif").click(function(){
    localStorage.removeItem('notifcation')
    $(this).css('visibility', 'hidden')
})

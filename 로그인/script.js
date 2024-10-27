(function() {
    document.getElementById("loginButton").onclick = function() {
        var u = document.getElementById("username").value;
        var p = document.getElementById("password").value;
        if (u === "test" && p === "test") {
            window.location.href = "/tsxst.github.io/sxs/index.html";
        } else {
            alert("아이디 또는 비밀번호가 틀렸습니다.");
        }
    };
})();

<script>
function clickFunction() {
    var value = document.getElementById("input").value;
    if (value >= 18) {
        document.getElementById("premission").innerHTML = "You are allowed!";
    } else {
        document.getElementById("premission").innerHTML = "You are forbidden";
    }
    if (isNaN(value)) {
        document.getElementById("premission").innerHTML = "The input is invalid."
    }
}
</script>

<!DOCTYPE html>
<html>
<head>
<title></title>
</head>
<body>
<button id="btn"> click me</button>
<script type="text/javascript">
function a() {
console.log('hello world');
}
 
function b() {
a();
}
 
function c() {
b();
}
 
document.getElementById('btn').addEventListener('click', c, true);
</script>
</body>
</html>
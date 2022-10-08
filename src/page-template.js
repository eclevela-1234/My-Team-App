
module.exports = (data) => {
 return `
<!DOCTYPE html>
<html lang="en">
 
<head>
     <meta charset="UTF-8">
     <meta http-equiv="X-UA-Compatible" content="IE=edge">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Team Builder</title>
     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"
         integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
</head>
 
<body>
    <header class="bg-danger">
         <h1 class="text-center text-light py-4">My Team</h1>
    </header>
    <main>
        <div class="container py-3">
            <div class="row justify-content-center">
                ${data.map(i => i).join('')}
            </div>
        </div>
    </main>
    <footer class="bg-danger">
        <h3 class="text-center text-light py-3">&copy Eliot Cleveland 2022</h3>
    </footer>
        
        
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
</body>
        
</html>
`
};
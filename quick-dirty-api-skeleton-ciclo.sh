npm init -y && 
npm install mongoose express body-parser morgan cors && 
npm install -D nodemon jest supertest && 
echo "
/node_modules
.DS_Store
.env" >> .gitignore &&
mkdir db models seed routes controllers tests &&
touch server.js app.js db/connection.js models/project.js seed/projects.js routes/projects.js controllers/projects.js tests/{base,routes}.test.js &&
code .
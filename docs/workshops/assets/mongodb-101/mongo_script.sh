use cyf
db.Student.insert({name: 'alex', email: 'agiamas@gmail.com'}, scores: {midterm: 50, final: 75}})
db.Student.insert({name: 'bob', email: 'bobbybrown@gmail.com', scores: {midterm: 100, final: 50}})
db.Student.insert({name: 'carol', email: 'carolferara@gmail.com', scores: {midterm: 80, final: 95}})
db.Student.insert({name: 'dana', email: 'danadown@gmail.com', scores: {midterm: 80, final: 95}})
db.Project.insert({name: 'cyf website', required_score: 75})
db.Project.insert({name: 'breast cancer care UK', required_score: 85})

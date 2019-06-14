
export const getCookList = ()=>(
    new Promise((resolve,reject)=>{
            resolve([{
                "id":1,
                "date":"1111-11-11",
                "name":"test_1",
                "description":"test 1",
                "img":"img/cookIcon/1.png",
                "versions":[{
                "date":"2222-22-2",
                "name":"test_2",
                "description":"2",
                "img":"img/cookIcon/2.png"}]
            },
            {
                "id":3,
                "date":"3333-33-33",
                "name":"test_3",
                "description":"test 3",
                "img":"img/cookIcon/3.png",
                "versions":[{
                    "date":"4444-44-4",
                    "name":"test_4",
                    "description":"4",
                    "img":"img/cookIcon/4.png"
                }]
            }])
    })
)
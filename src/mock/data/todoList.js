import Mock from 'mockjs'
let Todos = []
const COUNT = [1, 2, 3, 4, 5]
for (let i = 1; i <= COUNT.length; i++) {
  Todo.push(Mock.mock({
    id: Mock.Random.guid(), // 随机 id
    title: Mock.Random.first(), // 随机标题 
    isDelete: false,  
    locked: Mock.Random.boolean(),
    record: COUNT.map(() => {
      return {
        text: Mock.Random.cparagraph(2),
        isDelete: false,
        checked: Mock.Random.boolean()
      }
    })
  }))
}

export {
  Todos
}
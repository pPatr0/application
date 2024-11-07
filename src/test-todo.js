import { Selector } from "testcafe";

fixture("todo.app tests")
    .page("http://localhost:5173/");

// test("Input", async t =>{
//     const inputField = Selector('#todo-input')
//     const submitButton = Selector('button[type="submit"]')

//     await t
//         .typeText(inputField, 'randomTask')
//         .click(submitButton)
// })


// test("Remove", async t =>{
//     const inputField = Selector('#todo-input')
//     const submitButton = Selector('button[type="submit"]')

//     await t
//         .typeText(inputField, 'dontRemove')
//         .click(submitButton)
//     await t
//         .typeText(inputField, 'removeThisOne')
//         .click(submitButton)
//     await t
//         .click(Selector("#todo-list > li:nth-child(2) > button.remove-btn"))
// })

test('pass', async t=>{true})
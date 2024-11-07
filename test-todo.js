import { Selector } from "testcafe";

fixture("todo.app tests")
    .page("https://test.sevcik2024.dk/todo/");

test("completed-todo", async t =>{
    const inputField = Selector('#todo-input')
    const submitButton = Selector('button[type="submit"]')

    await t
        .typeText(inputField, 'TaskOne')
        .click(submitButton)
    await t
        .typeText(inputField, 'TaskTwo')
        .click(submitButton)
    await t
        .typeText(inputField, 'TaskThree')
        .click(submitButton)
    await t
        .typeText(inputField, 'TaskFour')
        .click(submitButton)
    await t
        .typeText(inputField, 'TaskFive')
        .click(submitButton)
    await t
        .click(Selector("#todo-list > li:nth-child(1) > input"))
        .click(Selector("#todo-list > li:nth-child(3) > input"))
        .click(Selector("#todo-list > li:nth-child(5) > input"))
        .click(Selector("#todo-list > li:nth-child(1) > input"))
})


test("Remove", async t =>{
    const inputField = Selector('#todo-input')
    const submitButton = Selector('button[type="submit"]')

    await t
        .typeText(inputField, 'TaskOne')
        .click(submitButton)
    await t
        .typeText(inputField, 'TaskTwo')
        .click(submitButton)
    await t
        .typeText(inputField, 'TaskThree')
        .click(submitButton)
    await t
        .typeText(inputField, 'TaskFour')
        .click(submitButton)
    await t
        .typeText(inputField, 'TaskFive')
        .click(submitButton)
    await t
        .click(Selector("#todo-list > li:nth-child(1) > input"))
        .click(Selector("#todo-list > li:nth-child(3) > input"))
    await t
        .click(Selector("#toggle-all"))
    await t
        .click(Selector("#clear-completed"))
})

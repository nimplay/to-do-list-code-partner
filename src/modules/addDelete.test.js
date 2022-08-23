/**
 * @jest-environment jsdom
 */
import secondBar from './secondbar.js';

const html = `<div class="container">
<ul class="item-list" id="item-list"></ul>
</div>`;

document.body.innerHTML = html;
secondBar();
describe('add and remove items', () => {
  test('add new item', () => {
    document.querySelector('#imput-text').value = 'task 1';
    document.querySelector('.add-btn').click();
    const list = document.querySelectorAll('.item');
    expect(list).toHaveLength(1);
  });
  test('remove new item', () => {
    const toDoTasks = [1, 2, 3];
    toDoTasks.splice(1, 2);
    localStorage.setItem('Data', JSON.stringify(toDoTasks));
    const storage = JSON.parse(localStorage.getItem('Data'));
    expect(storage).toHaveLength(1);
  });
});
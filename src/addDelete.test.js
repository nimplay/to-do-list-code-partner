const addItem = require('./src/modules/item');

test('Add one new item to the list', () => {
  document.querySelector('item-list');
  addItem();
  const list = document.querySelectorAll('.item');
  expect(list).toHaveLength(1);
});

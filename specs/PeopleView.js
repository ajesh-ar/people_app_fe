import PeopleView from 'components/PeopleView';

const fixtures = {
  th_id_text: 'ID',
  th_first_name_text: 'First Name'
};
let usersView;
let theads;

describe('FileUploadView', () => {
  before(() => {
    usersView = new PeopleView();
    usersView.render();
    theads = usersView.$el.find('th');
  });

  it('should has CSV Download link', () => {
    expect($(theads[0]).html()).to.be.equal(fixtures.th_id_text);
  });

  it('should has input with name user_data_file', () => {
    expect($(theads[1]).html()).to.be.equal(fixtures.th_first_name_text);
  });
});

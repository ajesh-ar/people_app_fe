import FileUploadView from 'components/FileUploadView';

const fixtures = {
  csv_download_url: '../public/sample_people_data.csv',
  input_name: 'user_data_file'
};
let uploadView;
let link;
let input;

describe('FileUploadView', () => {
  before(() => {
    uploadView = new FileUploadView();
    uploadView.render();
    link = uploadView.$el.find('a');
    input = uploadView.$el.find('input');
  });

  it('should has CSV Download link', () => {
    expect($(link[0]).attr('href')).to.be.equal(fixtures.csv_download_url);
  });

  it('should has input with name user_data_file', () => {
    expect($(input[0]).attr('name')).to.be.equal(fixtures.input_name);
  });
});

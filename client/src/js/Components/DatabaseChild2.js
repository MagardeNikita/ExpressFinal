var React=require("react");
var DatabaseChild2= React.createClass({


deleteData:function()
{
var id=this.props.id;
console.log("hello");
console.log(id);
  $.ajax({
   url: 'http://localhost:8081/message',
   dataType: 'json',
   type: 'DELETE',
   data: {id:id},
   success: function(data)
   {
     console.log("deleted");
   }.bind(this),
   error:function(err)
   {
     console.log("error");
   }.bind(this)
});
},


updateData:function()
{
var id=this.props.id;
  $.ajax({
   url: 'http://localhost:8081/message',
   dataType: 'json',
   type: 'PUT',
   data: {id:id},
   success: function(data)
   {
     console.log("updated");
   }.bind(this),
   error:function(err)
   {
     console.log("error");
   }.bind(this)
});
},



  render: function() {
var from2=this.props.from1;
var subject2=this.props.subject;
var id1=this.props.id;
console.log(id1);

return (
    <tr>
      <td>{this.props.from1}</td>
      <td>{this.props.subject}</td>
      <td><button className="btn btn-primary" id="delete-button" onClick={this.deleteData}>Delete</button></td>
      <td><button className="btn btn-primary" id="update-button" onClick={this.updateData}>Update</button></td>
    </tr>
     );
  }
});
module.exports=DatabaseChild2;

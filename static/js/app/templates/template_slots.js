
var TemplateSlots = {


 
 


    renderTableRows: `
              <%
              const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
              _.each(items,function(item,key,list){
              %> 
                    <tr  data-id="<%-item.Id %>"> 
                        <td class="align-middle"><%-item.Date.toLocaleDateString(undefined, options) %></td>
                        <td class="align-middle"><%-item.CustomerName %></td>
                        <td class="align-middle"><%-item.CustomerNumber %></td>
                        <td class="align-middle"><%-item.Prize.toLocaleString('en-US', { style: 'currency', currency: 'GBP' }) %></td>
                        <td class="align-middle"><%-item.MachineNumber %></td>
                        <td class="align-middle"><%-item.HostName %></td>
                      <td class="align-middle"> <a class="btn btn-success btn-show-edit-slot" data-id="<%-item.Id %>" href="add-slot.html?id=<%-item.Id %>">Edit</a></td> 
                    </tr> 
             <%
              });
              %>
`,





}

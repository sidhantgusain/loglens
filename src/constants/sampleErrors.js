export const SAMPLE_ERRORS = [
  {
    label: "NullReferenceException in ASP.NET",
    error: `Unhandled exception. System.NullReferenceException: Object reference not set to an instance of an object.
at MyApp.Controllers.OrderController.GetOrder(Int32 id) in C:\Projects\MyApp\Controllers\OrderController.cs:line 47
at lambda_method(Closure , Object , Object[] )
at Microsoft.AspNetCore.Mvc.Infrastructure.ActionMethodExecutor.SyncActionResultExecutor.Execute(IActionResultTypeMapper mapper, ObjectMethodExecutor executor, Object controller, Object[] arguments)
at Microsoft.AspNetCore.Mvc.Infrastructure.ControllerActionInvoker.InvokeActionMethodAsync()`,
  },
  {
    label: "Java StackOverflowError",
    error: `Exception in thread \"main\" java.lang.StackOverflowError
at com.example.TreeNode.findDepth(TreeNode.java:23)
at com.example.TreeNode.findDepth(TreeNode.java:23)
at com.example.TreeNode.findDepth(TreeNode.java:23)
at com.example.Main.main(Main.java:11)`,
  },
  {
    label: "Python KeyError traceback",
    error: `Traceback (most recent call last):
File \"app.py\", line 34, in process_user
name = user_data['profile']['name']
File \"app.py\", line 21, in get_profile
return cache[user_id]
KeyError: 'user_42'`,
  },
  {
    label: "C# async/await deadlock",
    error: `System.Threading.Tasks.TaskCanceledException: A task was canceled.
at System.Runtime.CompilerServices.TaskAwaiter.ThrowForNonSuccess(Task task)
at UserService.cs:line 88
at AuthController.cs:line 42
at System.Web.Mvc.Async.AsyncControllerActionInvoker.<BeginInvokeActionMethodWithFilters>b__3f(IAsyncResult asyncResult)`,
  },
];

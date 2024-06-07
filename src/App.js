import TodoApp from './components/TodoApp';
import './App.css';

function App() {
  return (
    <div className="h-screen bg-gradient-to-b 
                    from-sky-500 to-blue-600"> 
      <header className="container mx-auto text-5xl text-center py-5 font-bold
                        ">
      Simple to-do List
      </header>

        <div className='flex justify-center'>
            <TodoApp />
        </div>

    </div>
  );
}

export default App;

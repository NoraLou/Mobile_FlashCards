const flashCardAPI = {

  const payload = {

    React: {
      title: 'React',
      questions: [
        {
          q: 'What is React?',
          a: 'A library for managing user interfaces'
        },
        {
          q: 'Where do you make Ajax requests in React?',
          a: 'The componentDidMount lifecycle event'
        },
      ]
    },

    ES6: {
      title: 'ES6',
      questions: [
        {
          q: 'What does the spread operator do? ',
          a: 'It takes every single item from an interable and applies it to the containing element'
        },
        {
          q: 'What are two new Array methods?',
          a: 'Array.find() & Array.findIndex()'
        },
      ]
    },

    Linux Command Line: {
      title: 'Linux Command Line',
      questions: [
        {
          q: 'What does the commad "cat filename.txt" do ?',
          a: 'It will display the contents of the given file in the shell'
        },
        {
          q: 'What does the command "chmod u + x" do?',
          a: 'It changes user permissions to read and write'
        },
        {
          q: 'What does the command "ls -a" do?',
          a: 'It lists all the file names (even the hidden system directories that start wiht a "."'
        },
        {
          q: 'What does the command "pwd" do?',
          a: 'It displays the path to our current working directory'
        },
      ]
    }
  }

  all: function() { return this.payload}
}

export default flashCardAPI

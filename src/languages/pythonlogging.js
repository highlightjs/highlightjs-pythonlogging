/*
Language: Python (Logging Output)
Description: Python has standard logging that can be colored based on a logging level
Author: Vanessa Sochat <@vsoch>
Website: https://docs.python.org/3/library/logging.html
Category: common
*/

function(hljs) {
  return {
    aliases: ['pythonlogging'],
    contains: [

      // FATAL or ERROR
      {
        className: 'title',
        variants: [
          { begin: '^FATAL', end: ':' },
          { begin: '^ERROR', end: ':' }
        ]
      },

      // CRITICAL
      {
        className: 'function',
        variants: [
          { begin: '^CRITICAL', end: ':' }
        ]
      },

      // WARNING
      {
        className: 'variable',
        variants: [
          { begin: '^WARNING', end: ':' }
        ]
      },

      // INFO statements
      {
        className: 'string',
        variants: [
          { begin: '^INFO', end: ':' }
        ]
      },

      // INFO statements
      {
        className: 'meta',
        variants: [
          { begin: '^LOG', end: ':' }
        ]
      },

      // DEBUG statements
      {
        className: 'message',
        variants: [
          { begin: '^DEBUG', end: ':' }
        ]
      },

      // strong segments
      {
        className: 'strong',
        variants: [
          { begin: '^FATAL', end: ':' },
          { begin: '^CRITICAL', end: ':' },
          { begin: '^WARNING', end: ':' },
          { begin: '^ERROR', end: ':' },
          { begin: '^INFO', end: ':' },
          { begin: '^LOG', end: ':' },
          { begin: '^DEBUG', end: ':' },
        ]
      }
    ]
  };
}

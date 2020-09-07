import fetch from './fetch';
import url from './url';

const resource = {};
resource.get = `<pre><code class="js language-js">fetch('${url.getResource}')
  ${fetch.responseText}

  /* Output */
  ${fetch.outputQuizz}
</code></pre>`;

resource.getAll = `<pre><code class="js language-js">fetch('${url.getAllResource}')
  ${fetch.responseText}

  /* Output */
  ${fetch.outputQuizzs}
</code></pre>`;

resource.create = `<pre><code class="js language-js">fetch('${
  url.createResource
}', ${fetch.params('POST')})
  ${fetch.responseText}

  /* Output */
  ${fetch.outputQuizz}
</code></pre>`;

resource.put = `<pre><code class="js language-js">fetch('${
  url.getResource
}', ${fetch.params('PUT')})
  ${fetch.responseText}

  /* Output */
  ${fetch.outputQuizz}
</code></pre>`;

resource.patch = `<pre><code class="js language-js">fetch('${
  url.getResource
}', ${fetch.params('PATCH')})
  ${fetch.responseText}

  /* Output */
  ${fetch.outputQuizz}
</code></pre>`;

resource.filter = `<pre><code class="js language-js">// ?[column]=[value]
// Examples:
fetch('${url.filterResource('?category=history')}') // Filter by category
fetch('${url.filterResource('?id=QUIZZ_ID')}') // Filter by id
</code></pre>`;

resource.sort = `<pre><code class="js language-js">// ?sort=-[sortBy] or ?sort=[sortBy]
// Examples:
fetch('${url.filterResource('?sort=-createdAt')}') // Get new item first
fetch('${url.filterResource('?sort=createdAt')}') // Get old item first
</code></pre>`;

resource.pagination = `<pre><code class="js language-js">// ?page=[number]&limit=[number] (limit: 8 is default)
// Examples:
fetch('${url.filterResource('?page=2&limit=10')}') // Get item from 11 to 20
</code></pre>`;

resource.mix = `<pre><code class="js language-js">// Examples:
// Get all item has category='history' from 11 to 20
fetch('${url.filterResource('?category=history&page=2&limit=10')}')
</code></pre>`;

resource.model = `<pre><code class="js language-js">// Quizz Model
{
  id: 'abcxyz', // auto
  content: '',
  category: 'none',
  author: 'Unknow',
  public_time_format: null // Datetime format
  public_time: null, // String Datetime format
  source: '',
  root_source: '',
  title: '',
  questions: [{
    answers: ['cat', 'dog', 'mice'] // *required
    correct_answer: 'mice' // *required
    explain: '',
    img: {
      alt: '',
      title: '',
      url: ''
    },
    num: null,
    question: 1 // *required
  },
  ...]
}
</code></pre>`;

export default resource;

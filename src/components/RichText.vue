<template>
    <div v-if="readOnly">
        <el-tiptap :readonly="true" :showMenubar="false" :extensions="extensions" :content="testContent" placeholder="Write something ..."/>
    </div>
    <div v-else>
        <el-tiptap :extensions="extensions" placeholder="Write something ..."/>
    </div>
</template>
  
  <script>
  import {
    // all extensions
    Doc,
    Text,
    Paragraph,
    Heading,
    Bold,
    Italic,
    Strike,
    Underline,
    Link,
    Image,
    Blockquote,
    ListItem,
    BulletList, // use with ListItem
    OrderedList, // use with ListItem
    TodoItem,
    TodoList, // use with TodoItem
    TextAlign,
    Indent,
    HorizontalRule,
    HardBreak,
    History,
    LineHeight,
    Iframe,
    CodeBlock,
    // TrailingNode,
    // Table, // use with TableHeader, TableCell, TableRow
    // TableHeader,
    // TableCell,
    // TableRow,
    // FormatClear,
    TextColor,
    TextHighlight,
    Preview,
    Print,
    Fullscreen,
    CodeView
    // SelectAll,
  } from "element-tiptap";
  
  import codemirror from "codemirror";
  import "codemirror/lib/codemirror.css"; // import base style
  import "codemirror/mode/xml/xml.js"; // language
  import "codemirror/addon/selection/active-line.js"; // require active-line.js
  import "codemirror/addon/edit/closetag.js"; // autoCloseTags
import { readonly } from "vue";
  
  export default {
    name: "RichText",
    props: {
        readOnly: {
            type: Boolean,
            default: false,
        },
        content: ''
    },
    data: () => ({
        readExtensions:[
            new Doc(),
            new Text(),
            new Paragraph(),
            new Print(),
            new Image(),
            new Indent(),
        ],
      extensions: [
        new Doc(),
        new Text(),
        new Paragraph(),
        new Heading({ level: 5 }),
        new Bold({ bubble: true }),
        new Underline({ bubble: true }),
        new Italic({ bubble: true }),
        new Strike({ bubble: true }),
        new Link({ bubble: true }),
        new Image(),
        new Blockquote(),
        new TextAlign(),
        new ListItem(),
        new BulletList({ bubble: true }),
        new OrderedList({ bubble: true }),
        new TodoItem(),
        new TodoList(),
        new Indent(),
        new HardBreak(),
        new HorizontalRule({ bubble: true }),
        new Fullscreen(),
        new CodeView({
          codemirror,
          codemirrorOptions: {
            styleActiveLine: true,
            autoCloseTags: true
          }
        }),
        new Iframe(),
        new Print(),
        new History(),
        new LineHeight(),
        new CodeBlock(),
        new TextColor(),
        new TextHighlight(),
        new Preview()
      ],
  
      testContent: `<h2 style="text-align: center">Welcome To Element Tiptap Editor Demo</h2><p>🔥 <strong>Element Tiptap Editor </strong>🔥is a WYSIWYG rich-text editor using&nbsp; <a href="https://github.com/scrumpy/tiptap" rel="noopener noreferrer nofollow">tiptap</a>&nbsp;and <a href="https://github.com/ElemeFE/element" rel="noopener noreferrer nofollow">element-ui</a>&nbsp;for Vue.js <img src="https://i.ibb.co/nbRN3S2/undraw-upload-87y9.png" alt="" title="" height="200" data-display="right"> that\'s easy to use, friendly to developers, fully extensible and clean in design.</p><p></p><p style="text-align: right">👉Click on the image to get started image features 👉</p><p></p><p>You can switch to <strong>Code View </strong>💻 mode and toggle <strong>Fullscreen</strong> 📺 in this demo.</p><p></p><p><strong>Got questions or need help or feature request?</strong></p><p>🚀 <strong>welcome to submit an <a href="https://github.com/Leecason/element-tiptap/issues" rel="noopener noreferrer nofollow">issue</a></strong> 😊</p><p>I\'m continuously working to add in new features.</p><p></p><blockquote><p>This demo is simple, switch tab for more features.</p><p>All demos source code: <a href="https://github.com/Leecason/element-tiptap/blob/master/examples/views/Index.vue" rel="noopener noreferrer nofollow">source code 🔗</a></p></blockquote>`
    })
  };
  </script>
  
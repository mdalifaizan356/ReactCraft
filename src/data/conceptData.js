//“What + Why + Syntax + Working + Demo + Mistakes + Best Practices + Advanced”

export const conceptData = [
  {
    Name:"Import & Export",
    Notes:{
      About:[
        "JavaScript applications use Module Systems to split the code into multiple files and reuse it anywhere in the project.",
        "Sending code from one file so it can be used in another file that is called Export",
        "Bringing exported code from another file into the current file that is called Import",
        "We can import and export almost anything like: Functions, Components, Variables, Objects, Arrays, Images, CSS Files, JSON Files, Hooks, Icons.",
        "Therearemainlytwomodulesystems"
      ],

      "CommonJS(CJS)":[
        "CommonJS is the traditional module system used in Node.js.",
        "It is Default module system in older versions of Node.js.",
        "Uses `module.exports or exports to export code.",
        "Uses require() function to import code.",
        "Modules are loaded synchronously.",
        ".js extension is optional while importing in most CommonJS environments.",
        "Mainly used in older Node.js projects.",
        "In CommonJS (CJS), there are two common ways to export functions.",
        {
          Way1: [
            "First, create all the required functions separately in the file.",
            "After all functions are created, export them together at the end of the file.",
            "This keeps the function logic and the export statement separate.",
            "When another file needs these functions, it can import only the required ones by their names.",
            "This is the most common and recommended approach because it is clean, organized, and easy to maintain."
          ],
          Way2: [
            "Instead of creating functions separately, define them directly while exporting.",
            "In this approach, the function is created and exported at the same time.",
            "The exported object contains function names as properties.",
            "Another file imports the entire exported object and then uses its functions through that object.",
            "This approach is suitable for small files but becomes harder to read and maintain as the project grows."
          ]
        }
      ],
      "ESModules(ESM)":[
        "ES Modules (ESM) are the modern JavaScript module system.",
        "They are supported by both JavaScript and Node.js.",
        "Uses import to import code.",
        "Uses export and export default to export code.",
        "Modules are statically analyzed before execution.",
        "Supports Tree Shaking.",
        "Used by React, Vite, Next.js, modern browsers, and modern Node.js.",
        "In Node.js, use either: type: module in `package.json  and.mjs file extension.",
        "In ES Modules (ESM), there are two common ways to export code.",
        {
          "Named Export": [
            "Use Named Export when you want to export multiple values from the same file.",
            "Every exported value must have its own name.",
            "Another file imports only the required values by using their names.",
            "The imported names must match the exported names unless an alias is used.",
            "This approach is commonly used for utility functions, constants, hooks, helper functions, and data files."
          ],
          "Default Export": [
            "Use Default Export when the file has one main value to export.",
            "Only one Default Export is allowed in a single file.",
            "Another file can import it without using curly braces.",
            "The imported name can be anything because the original name is not fixed.",
            "This approach is commonly used for React components, main classes, or the primary object or function of a file."
          ]
        }
      ],
      Hoisting:[
        "In CommonJS require() is a normal JavaScript function so a module is loaded only when the program execution reaches the `require()` statement. This means the module is resolved and executed at runtime. On the other hand, in ES Modules, `import` is not a normal function call. Before executing the file, the JavaScript engine first analyzes all `import` statements and resolves their dependencies. Because of this static analysis, imports are available before the code runs, which also enables optimizations like Tree Shaking. Therefore, it is more accurate to say that ES Module imports are resolved before code execution rather than saying that ESM hoisting happens."
      ],
      Role_In_React:[
        "React (Vite, Create React App, Next.js, etc.) uses ES Modules (ESM).",
        "Since most React files contain one main component, Default Export is commonly used.",
        "Named Export is commonly used for: Utility Functions, Helper Functions, Constants, Custom Hooks, Data Files, Icons, Multiple Components in one file (less common).",
        "Default Export is commonly used for: React Components, Main Class, Main Function, Single Main Object.",
        "One file can have multiple Named Exports.",
        "One file can have only one Default Export.",  
        "A file can contain both Named Export and Default Export together.",
      ],
    }
  },


  {
    Name:"JSX",
    Notes:{
      About: [
      "JSX stands for JavaScript XML. It is a syntax extension of JavaScript that allows developers to write HTML-like UI code inside JavaScript. JSX makes UI structure more readable, maintainable, and easier to understand while building React applications.",
      "Ye traditional JavaScript ke comparison me UI development ko zyada visual aur organized banata hai.",    
      "JSX ka main purpose user interface ko declarative aur developer-friendly banana hai.",
      "Isse developers directly HTML-like syntax ka use karke UI define kar sakte hain, jisse code maintain karna aur samajhna aasaan hota hai.",
      "JSX complex UI structures ko bhi clean format me represent karta hai.",
      "React me JSX ka role components ke UI structure ko define karna hota hai.",
      "Jab developer JSX likhta hai, to Babel usse normal JavaScript React.createElement() calls me convert karta hai. React phir in elements ko Virtual DOM ke through efficiently browser me render karta hai.",
      "JSX Can Directly Render: String, Number, React Element, Component, Arrays of renderable values JSX Accepts But Ignores: null, undefined, true, false",
      "JSX Cannot Directly Render: Plain Object, Function reference, Statements (if, for, while), Loops, Symbol, BigInt",
      "Special Note: Objects in JSX Plain JavaScript objects directly render nahi hote, lekin objects JSX me indirectly use ho sakte hain: Props, Inline styles, Configuration, Data source, Array mapping",
      "JSX and React Relation: JSX React ka mandatory part nahi hai, but modern React development me most common UI writing approach hai.",
      "Real Purpose: JSX React ke declarative UI model ko readable banata hai.",
      "JSX is transpiled by Babel into React.createElement() calls. Babel convert JSX in to Javascript using React bcoz browser can't undersatnd JSX.",
      // "example: JSX: const element = <h1>Hello Pasha</h1>; Babel Convert: const element = React.createElement("h1", null, "Hello Pasha");" 
      "React me bina JSX ke UI banane ke liye React.createElement() ka use karna padta hai, jo kaafi lengthy aur difficult hota hai. Nested elements ke case me readability aur maintainability dono kam ho jati hain. JSX is complexity ko reduce karta hai.",
      "Agar JSX na ho, to UI code verbose ho jata hai aur large applications me structure samajhna mushkil ho sakta hai. Developer productivity kam hoti hai aur debugging bhi comparatively hard ho jati hai.",
      "Modern frontend development me fast, scalable aur readable UI development bahut important hai. JSX isi need ko fulfill karta hai by making development smoother, faster aur less error-prone.",
    ],

    Syntax: {
      BasicSyntax: "const element = <h1>Hello World</h1>;",
      explanation: "JSX syntax HTML jaisa dikhta hai, lekin internally ye JavaScript hota hai. Is example me <h1>Hello World</h1> JSX hai jo React element create karta hai.",
      Parameters: "JSX me HTML-like tags use hote hain, JavaScript expressions curly braces {} ke andar likhe jaate hain, aur attributes jaise className, onClick, etc. use hote hain.",
      ReturnValue: "JSX directly HTML return nahi karta. Ye JavaScript object return karta hai jise React element kehte hain.",
      Rules: "JSX use karte waqt ek hi parent element hona chahiye, class ki jagah className use hota hai, JavaScript code {} ke andar likhna hota hai, self-closing tags properly close karne hote hain, aur inline styling object format me hoti hai.",
      InternalWorking: [
      "JSX browser directly nahi samajhta. Babel naam ka transpiler JSX code ko normal JavaScript me convert karta hai",
      "Converted JSX React elements banata hai jo Virtual DOM me stored hote hain. React Virtual DOM aur Real DOM compare karke sirf necessary updates browser me apply karta hai.",
      "Jab state ya props update hote hain, component dobara render hota hai aur JSX re-evaluate hota hai. React efficient diffing process ke through optimized updates karta hai.",
      "Har component render cycle me JSX execute hota hai aur updated UI structure generate karta hai."]
    },
    
    practicalUseCases: [
      "JSX ka use simple UI elements banane ke liye hota hai jaise headings, buttons, forms, aur lists.",
      "Production projects me JSX dashboards, e-commerce product cards, authentication pages, aur admin panels jaise interfaces banane me use hota hai.",
      "JSX dynamic UI development ke liye essential hai, including conditional rendering, API data display, reusable components, aur dynamic user interfaces."
    ],

    bestPractices: {
      codingStandards: "Clean formatting, proper indentation, aur reusable component structure maintain karna best practice hai.",
      optimizationTips: "Heavy calculations JSX ke bahar rakho aur memoization techniques use karo.",
      scalabilityTips: "Components split karo, maintainable folder structure rakho, aur reusable design patterns follow karo."
    },
  }
  },
  
  {
    Name:"Component",
    Notes:{
      About: {
        Meaning: [
          "A React component is a reusable, independent, encapsulated unit of UI that can manage logic and return JSX to render a specific part of the user interface. ",
        ],
        Purpose:[
          "Purpose of Components: Code reusability, Better organization, Maintainability, Scalability, Independent logic Component Features: Reusable, Isolated, Accept props, Manage state, Handle events, Return JSX",
        ],

        RoleInReact:[
          "React me JSX ka role components ke UI structure ko define karna hota hai.",
        ],
      },

      Types:{
        Classification:"React components can be classified on the basis of structure, state management, responsibility, form control Relationship Basis and Logic Reuse Basis.",
        Structure_Syntax_Basis:{
          FunctionalComponent: "Functional Component ek normal JavaScript function hota hai jo props receive karta hai aur JSX return karta hai.",
            ClassComponent: "Class Component ES6 class hota hai jo React.Component ko extend karta hai.",
            Difference:[
              "Class Component and Functional Component Both are fundamental type of component It is use to create UI.",
              "Class Component is an ES6 class that extends React.Component and returns JSX using the render() method where as Functional Component look like Javascript function. It is takes props as a argument and return the JSX ",
              "Functional Component is lightweight where as class Components are heavy.",
              "Intially Functional Components was stateless but after introducing hooks it also manage state where as class Component use this.state() and setState() for manage the state.",
              "In Functional Component lifecycle methods not available directly but using useEffect hook it can achieves this functionality where as class Component lifecycle methods are predefined like componentDidMount(), componentDidUpdate(), componentWillUnmount()."
            ]
          },
          State_Management_Basis:[
            "A stateless component is a React component that does not have its own state. It only receives data through props and displays it on the screen. It is mainly used for showing UI like text, images, buttons, or layout parts. Stateless components are simple, fast, and easy to understand because they do not handle any logic or user interaction. They re-render only when their props change.",
            "A stateful component is a React component that has its own state. It can store and manage data inside the component using state. Stateful components are used when the UI needs to change based on user actions like button clicks, form input, or API responses. When the state changes, the component re-renders automatically. These components are slightly more complex but very powerful for building dynamic applications.",
            "Earlier in React, functional components were stateless, and only class components were stateful because they could manage state and lifecycle methods. After the introduction of React Hooks, functional components can also manage state and side effects using hooks like useState and useEffect. Now, functional components can be both stateless and stateful, and they are preferred in modern React development."
          ],
          Responsibility_Purpose_Basis:{
            PresentationalComponent: "A presentational component is mainly used to display UI. It focuses only on how things look and does not manage business logic or data fetching. It usually receives data through props and renders JSX. These components are reusable, simple, and easy to test. It also called Dumb Component",
            ContainerComponent:"A container component is responsible for handling logic and data. It manages state, API calls, and business logic, and then passes data to presentational components using props. Container components decide how things work, not how they look. It is also called Smart Component becouse it hold Logic and Data."
          },
          Formcontrol_Basis:{
            ControlledComponent: "A controlled component is a form component where form data is controlled by React state. The value of input fields is stored in state and updated using setState or useState. Every change in input goes through React, so it gives full control over form data. Controlled components are easy to validate and manage, but they need more code.Controlled components are preferred because they integrate better with validation and state management.",
            UncontrolledComponent:"An uncontrolled component is a form component where form data is handled by the DOM itself. React does not control the input value directly; instead, it uses ref to access the input value when needed. These components are simpler and require less code, but validation and control are limited."
          },
          Relationship_Basis:{
            ParentComponent: "A Parent Component is a component that renders one or more other components inside itself. It can pass data and functions to its child components through props and control their behavior.",
            ChildComponent:  "A Child Component is a component that is rendered inside another component (the parent component). It can receive data and functions from its parent through props and use them to display or interact with the UI.",
            SiblingComponent:"Sibling components are those components that render under the same parent. They are on the same hierarchical level and are not nested inside each other.",
          },
          Logic_Reuse_Basis:{
            HigherOrderComponent: "A Higher Order Component is a function that takes a component as input and returns a new enhanced component. It is used to reuse logic or behavior across multiple components without repeating code. HOCs do not modify the original component; they wrap it and add extra functionality like authentication, data fetching, or logging."
          } 
      },
    LifecycleMethod:{
      what:[
        "Lifecycle methods are special types of function which is run automatically on different stages of component life cycle.",
        "Every Component have a different stages when it is render(mount), update(update) and destroy(unmount). This stages control by lifecycle method.",
        "Lifecycle methods available for only class component where as lifecycle manage in functional component using by Hooks.",
      ],
      Lifecycle_methods_for_class_component:[
          "For Mounting: Constructor(), render() and componentDidMount",
          "For Updating: shouldComponentUpdate(), render() and componentDidUpdate",
          "For Unmounting: componentWillUnmount",
        ]
      },
    }
  },


  {
    Name:"Props",
    Content:{
      About:[
        "Props stands for Properties.It is a immutable data.Props are used for communication between React components.It work like Function arguments in JavaScript. Props mainly allow One-Way Data Flow (parent-to-child data flow) and child-to-parent communication happens by passing callback functions through props.",
        "In props, we can pass strings, numbers, booleans, arrays, objects, functions and inline function, JSX elements, and components also."
      ],
      Main_Features_of_Props:[
        "Props are read-only (Immutable: cannot be modified by child component)",
        "Props can pass dynamic data",
        "Multiple props can be passed at the same time",
        "Props can be destructured for cleaner code",
      ],
      Advanced_prop_techniques:[
        "Spread Props: Allow us to pass multiple props easily using the spread operator (...)",
        "Default Props: Provide fallback values when no prop is passed and prevent undefined values",
      ],
      Special_Props:[
        "children, key, and ref are React's specially handled props.",
        "In React commonly 2 main special props: children prop and Key prop",
        "In React commonly 1 main Special Reserved Prop: ref",
        "children accessible hai",
        "key and ref reserved hain",
        "key child ko directly receive nahi hota",
        "ref bhi normal prop nahi",
        "Children prop is a special built-in prop in React that receives the content placed between a component's opening and closing tags.",
        "children prop allows us to pass JSX, elements, text, or components inside another component.",
        "key prop: key is used by React to uniquely identify elements in a list rendering.",      
      ],
      React_key:[
        "Key React ka ek special prop hota hai jo list rendering ke time use hota hai. Ye React ko har element ko uniquely identify karne me madad karta hai jisse Virtual DOM efficiently old aur new list ko compare kar sake.",
        "React me list rendering ka matlab hai array data ke har item ke liye same type ka JSX repeat karna (Array → Loop → JSX).",
        "List hamesha array ke through render hoti hai and agar data object me ho to pehle use array me convert kiya jaata hai.",
        "Key component ke andar access nahi hoti, ye sirf React ke internal use ke liye hoti hai.",
        "List rendering ke liye map() function sabse zyada use hota hai, aur map() ke andar jo sabse outer JSX element return hota hai usi par key prop dena zaroori hota hai.",
      ],
      Props_vs_State:[
        "Props are used for component communication, while State is used for managing dynamic data within a component.",
        "State is an internal data of a component used for managing dynamic data within a component. while props is an external data used for component communication.",
        "Satate is a mutable where as props are immutable."
      ],
      Props_Drilling:[
        "Props Drilling is the process of passing data from a parent component to a deeply nested child component through multiple intermediate components that don't need the data. It can make the code complex and hard to maintain. Props drilling can be avoided using Context API, Redux, Zustand, Recoil."
      ]
    }
  },

  {
    Name:"Rendering",
    Notes:{
      About:[
        "Rendering is the process of executing a React component and displaying its output on the screen.",
      ],
      Types: [
        {
          Initial_Rendering:
            "The first time React executes a component and displays it on the screen.",

          Re_rendering:
            "When the state, props, or context changes, React executes the component again and updates the UI on the screen.",

          Conditional_Rendering:{
            Meaning:"Conditional Rendering in React is the process of displaying different UI elements or components based on specific conditions, such as state, props, or user actions. Conditional rendering use for Authentication, Loading states, Error messages, Role-based UI, Toggle systems, Forms, Notifications.",

            Main_Methods_of_Conditional_Rendering:{
              if_else_Statement:[
                "Best For: Large conditions, Complex logic, Multiple returns"
              ],
              Ternary_Operator:[
                "Best For: Inline JSX, Short conditions"
              ],
              "Logica_ AND_(&&)":[
                "Meaning: Condition true → render / Condition false → nothing",
                "Use Case: Optional UI, Alerts, Admin buttons."
              ],
              "Difference_between_&&_and_ternary?":[
              "&& → only true case",
              "ternary → true + false both"
              ],
              Hidden_Warning:[
                "{0 && <h1>Hello</h1>}",
                "output 0. Because: React 0 render kar deta hai."
              ],
              Returning_null:[
                "if (!isVisible) return null",
                "Useful For: Hidden components, Feature flags, Access control"
              ],
              Switch_Statement:[
                "Best For: Multiple conditions, Role-based systems"
              ],

              Best_Practices_Use:[
                "if/else for complex logic",
                "ternary for simple replacement",
                "&& for optional rendering",
                "null for hiding",
                "switch for multiple cases",
              ],
            }
          },
          List_Rendering:
            "Rendering multiple elements by looping through an array using the map() method.",

          Dynamic_Rendering:
            "Rendering UI that changes automatically based on data or user interaction.",
        },
      ],
    }
  },

  {
    Name:"Hooks",
    Notes:{
      About:[
        "React Hooks are special functions that allow functional components to use advanced React features without classes like state, lifecycle, context, refs, reusable logic.",
        "It is Introduced in React version 16.8 February 2019. Hook sirf component ke top level par use karo." 
      ],
      Built_in_React_Hooks:{
        State_Hooks: "useState, useReducer",
        Effect_Hooks: "useEffect, useLayoutEffect, useInsertionEffect, useEffectEvent",
        Context_Hooks: "useContext",
        Ref_Hooks: "useRef, useImperativeHandle",
        Performance_Hooks: "useMemo, useCallback, useTransition, useDeferredValue",
        Other_Hooks: "useDeferredValue, useDebugValue, useId, useSyncExternalStore, useActionState",
      },
      useState:{
        About_useState:[
          "Direct update",
          "useState React Hook hai jo functional components me state ko store aur update karta hai, aur state change hone par UI ko re-render karta hai.",
        ],
        syntax:[
          "const [value, setValue] = useState(initialValue);",
          "React useState ek array return karta he jisme [value, setValue] and initialValue useState() function ko diya gaya argument hai.",
          "initialValue me Number, String, Boolean, Array, Object, Null, Function as an argument pass kiye jate he.",
          "React har component instance ke liye state list maintain karta hai.",
          "React previous state ko component ke internal state storage me rakhta hai aur setter callback execute karte waqt wahi latest stored value prev ke roop me provide karta hai.",
          "Jab setter function ko function(callabck) pass karte ho, tab React us function ko previous state provide karta hai.",
          "React automatically latest previous state deta hai.",
          "prev setter function ke andar diye gaye callback function ka parameter hota hai.",
        ]
      },

      useReducer:{
        About_useReducer:[
          "Action-based update",
          "useReducer React Hook hai jo functional components me complex state logic ko manage aur update karta hai, aur state change hone par UI ko re-render karta hai.",
          "Syntax: const [value, dispatch] = useReducer(reducer, initialValue);",
          "React useReducer ek array return karta hai jisme [state, dispatch] hota hai, Yaha state current state and dispatch ek function hai action ko reducer tak bhejta hai taaki state update ho sake.",  
          "Action usually ek object hota he type: setName, payload: Faizan",
          "reducer ek function hota hai jo current state aur action lekar new state return karta hai. reducer Old state ko mutate nahi karta, New state return karta hai.",
          "Reducer ek pure function hai jo current state aur action ke basis par new state return karta hai.",
          "initialState state ki starting value hoti hai"
        ]
      },
      useEffect:{
        About_useEffect:[
          "Side effects management",
          "useEffect React Hook hai jo functional components me render ke baad side effects ko handle aur execute karta hai, aur dependency changes ke basis par effect lifecycle manage karta hai.",
          "Side effect wo operation hai jo component rendering ke alawa external system, async process, ya browser behavior ko affect karta hai.",
          "Aisa kaam jo component ke normal UI render ke bahar hota hai jaise:API calls, Data fetching, Timers, Event listeners, LocalStorage, DOM manipulation, Cleanup tasks, Console logging Side effect kehlata he.",
          "useEffect component render complete hone ke baad run hota hai.",
          "Syntax: useEffect(callback, dependenciesArray)",
          "useEffect direct value return nahi karta.Ye effect execution schedule karta hai.",
          "useEffect as an argument ek callback xn leta he or callback fxn optionally Cleanup function return karta he. ",
          "Callback function: side effect ogic",
          "Return function: cleanup logic",
        ],
        Dependency_array:[
          "Dependency array effect kab run hoga control karta hai",
        ],
        Dependency_Array_Cases:[
          "No dependency array: Runs after every render.",
          "Empty dependency array: Runs only once after initial render.",
          "Specific dependency:Runs when specific dependency value changes.",
        ],
        Terminology:{
          Effect: "Side effect logic jo render ke baad execute hota hai.",
          Dependency_Array: "Controls kab effect dobara run karega.",
          Cleanup: "Previous effect ko safely remove karta hai before next run or unmount."
        },
      } ,

      useLayoutEffect:{
        About_useLayoutEffect:[
          "Synchronous DOM effect management",
          "useLayoutEffect React Hook hai jo functional components me DOM update ke turant baad aur browser paint hone se pehle side effects ko handle aur execute karta hai, aur layout-related changes ko synchronous way me manage karta hai.",
          "Side effect wo operation hai jo DOM measurement, visual adjustments, ya browser rendering behavior ko directly affect karta hai before user UI dekhe.",
          "Aisa kaam jo browser paint se pehle execute hona zaruri ho jaise: DOM measurements, Element size/position check, Scroll position set karna, Layout adjustment, Synchronous DOM manipulation, Flicker prevention, Visual consistency maintain karna — ye useLayoutEffect ke common use cases hain.",
          "useLayoutEffect component render aur DOM update ke baad, lekin browser paint se pehle run hota hai.",
          "Syntax: useLayoutEffect(callback, dependenciesArray);",
          "useLayoutEffect direct value return nahi karta. Ye synchronous effect execution schedule karta hai before browser repaint.",
          "useLayoutEffect as an argument ek callback function leta hai aur callback function optionally Cleanup function return karta hai.",
          "Callback function: DOM/layout related side effect logic",
          "Return function: Cleanup logic",
        ],
        "Dependency_array":[
          "Dependency array: Effect kab run hoga control karta hai",
        ],
        Dependency_Array_Cases:{
          No_dependency_array: "Runs after every render before paint.",
          Empty_dependency_array: "Runs only once after initial render before first paint.",
          Specific_dependency: "Runs when specified dependency value changes before paint.",
        },
        Terminology:{
          Effect: "DOM ya layout related side effect jo render ke baad aur paint se pehle execute hota hai.",
          Dependency_Array: "Controls kab effect dobara run karega.",
          Cleanup: "Previous layout effect ko safely remove karta hai before next run or unmount.",
          Common_Hidden_Gems: "Prevents UI flickering, Accurate DOM measurements, Smooth scroll restoration, Animation preparation, Tooltip/modal positioning, Resize calculations.",
          Warning: "useLayoutEffect synchronous hota hai, isliye excessive use performance slow kar sakta hai because browser paint block hota hai."
        }
      },
      useEffect_Vs_useLayoutEffect:{
        UseCase: "Dono hooks side effects handle karte hai difference mainly execution timing ka hota hai.",
        useEffect:[
          "Render complete => Browser paint => Fir effect run",
          "Async nature me browser paint ke baad run hota hai.",
          "Result:UI pehle dikh jata hai, effect baad me chalta hai.",
        ],
        useLayoutEffect: [
          "Render complete => DOM update => Effect run => Browser paint",
          "Sync nature me browser paint se pehle run hota hai.",
          "Result: Effect pehle execute hota hai, user ko final adjusted UI dikhta hai."
        ],
        Simple_Rule:[
          "Visual DOM changes before user sees UI → useLayoutEffect.",
          "Normal side effects → useEffect."
        ]
      }
    }    
  },


  {
    Name:"Event Handling",
    defination:"Jsx stand for Javascript XML"
  },

  {
    Name:"Context API",
    defination:"Jsx stand for Javascript XML"
  },
  {
    Name:"Performance Optimization",
    defination:"Jsx stand for Javascript XML"
  },
  {
    Name:"Fragment",
    defination:"Jsx stand for Javascript XML"
  },
  {
    Name:"Portals",
    defination:"Jsx stand for Javascript XML"
  },
  {
    Name:"Memoization",
    defination:"Jsx stand for Javascript XML"
  },
]

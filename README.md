GRAPHLING
=========

![Graphling, the graph theory tool](http://mberlove.com/openshare/graphling-demo.jpg)

<br />
**Graphling** is a tool for creating visual representations of a graph structure. It uses a point-and-click interface to let the user quickly model a graph.


How to Use
----------

### [BASIC USE]
<br />
**Click anywhere in the drawing area (left-hand middle of window) to create a new node**. Move a node by clicking it once to select it (you should see it become highlighted), then clicking elsewhere in the drawing area.

 ![A single node in Graphling](http://mberlove.com/openshare/graphling-node.jpg)

**To connect two nodes, select one node, then click another node**. A line will be drawn connecting them. This line will "stick" to the nodes when they are moved. By default, the edge drawn is a directional arc originating at the first of the two nodes clicked and terminating at the second. You can change this setting by clicking the "Edges Directed" button in the settings bar. Click the button again to change it back.

 ![Connecting nodes in Graphling](http://mberlove.com/openshare/graphling-nodes.jpg)

**Right-click an existing node to remove it**. Any edges containing that node will be removed as well.

You will notice a section on the right hand side of the page for messages. By default, only output from graph algorithms will appear here, i.e. messages to the user. If you wish **to see more detailed reporting** from the system's internals for debugging or informational purposes **, click the button "Reporting Off"** in the settings bar.

The "clear" button is intended to clear any existing graph structures to allow new ones to occur unhindered, but is still under development, so for a new simulation it is generally best to refresh the page.


<br />
### [EXAMPLES]
<br />
In addition to the features mentioned above, there are also several examples of common graph types and algorithms that will animate in real time:

 ![Buttons to run examples in Graphling](http://mberlove.com/openshare/graphling-examples.jpg)

__*"K4 Construction"* builds a simple, fully connected 4-node graph__ in real time, as a basic demonstration of structure.

__*"Finding a Hamilton Path"* visualizes tracing a path through a graph to touch all nodes__ , though this is hard-coded since Hamiltonian Path-finding problems are computationally complex.

__*"Checking for a Cycle"* randomly generates a graph and then seeks to determine whether a cycle exists__ using a standard and fairly efficient algorithm (O(|V|)), then reports that result to the user.

__*"Weight Summation"* performs summation across all arcs of a directed graph__ generated randomly, simply serving to demonstrate how weights can be used.

<br />
### [CODE DEVELOPMENT]
<br />
** Much more information regarding code will be added shortly. **

There are eight main files in the Graphling project:

- **graph.html**  structure and main code
- **style.css** the style/layout definitions
- **Edge.js** code for the Edge class, connecting vertices
- **Node.js**  code for the Node class, a vertex (no relation to the Node.js)
- **Physical.js** most of the physical interpretation of the graph
- **Spot.js**  defining the basic setup for a free spot on a graph
- **Square.js**  similarly defines a square
- **Utilities.js**  has various minor functions that assist the overall code

In addition to these eight files **, JQuery version 11.1 is also included** (production version)

The code is fairly well commented; it shouldn't be too hard to find any given section or understand its purpose.

<br />
### [NOTES]
<br />
There is currently a section of code commented out that contains **a partially-completed implementation of the Bellman-Ford algorithm** for single-source shortest-path. Other than that, using the animation structure in the code, it should be fairly straightforward to add new animations.

This program is an ongoing effort. **Expect bugs.** However, it has been tested on several different browsers on multiple computers and is largely cross-system and cross-browser compatible.

In creating Graphling, I implemented features initially with the goal to demonstrate ideas I have learned in graph theory as well as providing easy construction of arbitrary graphs for visualization purposes, then continued to add features as time allowed, and I intend to keep on improving it. In addition to the code provided alongside this documentation, **up-to-date code at any point can be found in GitHub** , at [https://github.com/chaimedes/Graphling](https://github.com/chaimedes/Graphling).

A lot of the effort in **constructing this program was aimed at building up a solid framework rather than implementing specific features**. Accurate graph structuring, abstract representation, distinction of the conceptual graph from its physical structure, functional animation, and good code design were what I focused on, so that it is straightforward to expand upon this code. Most of the code is well commented, which should aid in further development as well as serving as additional documentation.


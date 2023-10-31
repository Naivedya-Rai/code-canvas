
# CodeCanvas
![image](https://github.com/Naivedya-Rai/code-canvas/assets/122347651/2e77a595-bb91-4503-9cd3-fd2f6afe5300)
Welcome to **CodeCanvas: DS & Algo Visualizer**, your ultimate tool for exploring path-finding and sorting algorithms. This application offers in-depth insights into how these algorithms function through captivating visual animations.

## Table of Contents
- [Key Features](#key-features)
- [Pathfinding Algorithms](#pathfinding-algorithms)
- [Sorting Algorithms](#sorting-algorithms)
- [How to Use Locally](#how-to-use-locally)
- [Live Demo](#live-demo)

## Key Features

**CodeCanvas** offers an array of features, including:

1. **Diverse Algorithm Demonstrations**: Explore popular path-finding algorithms such as A-Star (with two heuristics), Dijkstra, DFS, and BFS in the pathfinding section. In the sorting section, you can delve into Quick-sort, Merge-sort, Heap-sort, Radix-sort, and more.

2. **Dynamic Pathfinding**: Experience a unique visualization mode that allows you to place midpoints across the board. These midpoints guide the algorithm as it navigates toward the endpoint. You can also add walls during the animation for added complexity. In this mode, the algorithm can even follow your mouse movements, enhancing the "dynamic" experience. For this feature, we've employed the A* algorithm with the 'Diagonal' heuristic.

3. **Total Control**: Exercise full control over the visualization process. Pause and play animations, adjust the animation speed, use the player bar to move forward and backward within the animation, and more.

4. **Insightful Information**: Gain valuable insights into the actions of each algorithm, helping you comprehend their inner workings.

5. **Customization**: Tailor the animation environment to your liking. Customize the visualization playground according to your preferences.

6. **Tutorials**: Learn how the algorithms work and gain a thorough understanding. Access the code implementation of each algorithm in JavaScript, making it a valuable learning resource for developers.

7. **User-Friendly UI**: Navigate through a well-designed and user-friendly interface that enhances your experience.

8. **Immersive 3D Effects**: Enjoy cool 3D effects that make the visualization engaging and visually appealing.

#Available Algorithms


## Pathfinding Algorithms

- **A* Algorithm:** A widely-used pathfinding algorithm that efficiently finds the shortest path from a start point to a goal, considering both the cost and heuristic.

- **Dijkstra Algorithm:** A versatile algorithm that explores all possible paths, guaranteeing the shortest path in weighted graphs.

- **Depth-First Search:** A simple yet effective algorithm for exploring graphs, focusing on traversing as far as possible along each branch before backtracking.

- **Breadth-First Search:** An algorithm that explores all neighbor nodes at the present depth before moving on to nodes at the next depth level, ideal for finding the shortest path in unweighted graphs.

## Sorting Algorithms

- **Quick-Sort:** A fast and efficient sorting algorithm that uses a divide-and-conquer approach based on pivot elements.

- **Merge-Sort:** A stable and reliable sorting algorithm that divides the array into smaller parts, sorts them, and then merges them back together.

- **Heap-Sort:** A comparison-based sorting algorithm that converts the input array into a binary heap and then sorts it.

- **Radix-Sort:** A non-comparative sorting algorithm that processes the digits of numbers, making it suitable for sorting integers and strings.

- **Bubble-Sort:** A simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.

- **Insertion-Sort:** A straightforward sorting algorithm that builds the final sorted array one item at a time.

- **Selection-Sort:** An in-place comparison-based sorting algorithm that divides the input list into two parts: a sorted and an unsorted region.

These algorithms are available for exploration in the Code Canvas visualizer.

## How to Use Locally

To clone and run the Code Canvas repository locally, follow these guidelines:

**Clone the Repository:**

```
git clone https://github.com/Naivedya-Rai/code-canvas.git
```

**Install Node.js and npm:**

Ensure you have Node.js and npm (Node Package Manager) installed. You can download and install them from the official website: [Node.js](https://nodejs.org/)

**Install Dependencies:**

Navigate to the cloned repository's directory using your terminal or command prompt, and run:

```
npm install
```

**Run the Development Server:**

After the installation is complete, start the development server:

```
npm start
```

The application should now be running locally on your machine. You can access it in your web browser at `http://localhost:3000/`.

**Build the Application:**

To build the production version of the application:

```
npm run build
```

The build files will be generated in the `build` directory.

In case you don't have react-scripts installed, to install the `react-scripts` package in your cloned Code Canvas project, you can follow these steps:

1. Open your terminal or command prompt.

2. Navigate to the directory where you cloned the Code Canvas repository.

3. Use the following command to install the `react-scripts` package:

   ```
   npm install react-scripts
   ```

   This command will install the `react-scripts` package in your project, which includes the development scripts needed to run, test, and build the application.

4. After the installation is complete, you can then use the following scripts to manage your application:

   - **Start Development Server:**
     To start the development server, you can use the `npm start` command:

     ```
     npm start
     ```

     This will start the development server, and you can access the application at `http://localhost:3000`.

   - **Build for Production:**
     To build the application for production, use the `npm run build` command:

     ```
     npm run build
     ```

     This will create an optimized production build of the application in the `build` directory.

   - **Run Tests:**
     If you want to run tests, you can use the `npm test` command:

     ```
     npm test
     ```

Now, you can use these scripts to manage your Code Canvas application. Installing `react-scripts` allows you to run these commands within your project without the need for a global installation.

If you have any other specific requirements or questions, please feel free to ask.

## Future Scope
CodeCanvas is continuously evolving, and there are several exciting features and improvements in the pipeline. Here's a glimpse of what you can expect in the future:

User Authentication: We plan to add a robust user login system, allowing users to create accounts, save their progress, and share their algorithm visualizations and coding exercises with the community.

Integrated Code Editor: Imagine coding and experimenting with algorithms right within the application. Our future vision includes an integrated code editor that enables users to write and execute code, fostering a practical learning environment.

LeetCode-Like Problem Solving: Enhance your algorithm-solving skills by tackling LeetCode-like problems directly within CodeCanvas. Sharpen your coding abilities and apply your knowledge to real-world scenarios.

Comprehensive Algorithm Videos: In our commitment to providing an exceptional learning experience, we plan to introduce video tutorials that comprehensively explain each algorithm and feature. Visual learning at its best!

Enhanced Tutorials: We're constantly improving our algorithm tutorials. Look forward to more in-depth, step-by-step guides and explanations, making it easier for users to grasp the intricacies of each algorithm.

Q&A Forum: Our community matters, and we're developing a dedicated Q&A forum. Share your insights, seek answers to your questions, and engage with fellow learners to foster a collaborative learning environment.

Interactive Challenges: Get ready for interactive algorithm challenges and competitions. Test your skills, compete with others, and earn rewards for your achievements.

CodeCanvas is committed to becoming your ultimate destination for algorithm visualization, coding, and learning. Stay tuned for these exciting updates, as we work tirelessly to make your learning experience even more enriching and engaging. Your feedback and suggestions are invaluable in shaping the future of CodeCanvas!

## Live Demo
![image](https://github.com/Naivedya-Rai/code-canvas/assets/122347651/c5086e16-bf8d-4203-9068-f84cd8f16dd3)
You can experience Code Canvas live by visiting the hosted version at [Code Canvas Live Demo](https://naivedya-rai.github.io/code-canvas/). Feel free to experiment, have fun, and learn about various pathfinding and sorting algorithms. This live demo provides a hands-on experience with the application, allowing you to explore its features and visualize the algorithms in action.

Enjoy your exploration of Code Canvas! If you have any questions or need further assistance, please don't hesitate to reach out.

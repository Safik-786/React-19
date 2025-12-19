// 3. Core Differences (Very Important)
// Aspect	                    Virtualized List	            Pagination

// Rendering	                Only visible items	            Full page items
// User flow	                Continuous scrolling           	Page-by-page
// DOM nodes	                Very few	                    Many per page
// Data loading	                Often all data loaded	        Usually chunked
// Performance	                Excellent for huge lists	    Limited by page size
// UX	Smooth,                 modern	                        Traditional
// SEO	                        Poor (JS-heavy)	                Better
// Accessibility	            Harder	                        Easier





// Step 1: Fix item height
// Virtualization requires a known, constant itemHeight to map scroll position to item index.

// Step 2: Define viewport (container)
// Set a fixed containerHeight and containerWidth.
// This represents the visible area.

// Step 3: Calculate visible item count
// visibleCount = Math.floor(containerHeight / itemHeight)
// Only this many items are rendered at any time.

// Step 4: Track visible index window
// Maintain [startIndex, endIndex] in state.
// useState([0, visibleCount - 1])

// Step 5: Fake full list height
// Create an inner spacer with:
// totalHeight = list.length * itemHeight
// This preserves correct scrollbar behavior.

// Step 6: Slice visible items
// Render only:
// list.slice(startIndex, endIndex + 1)

// Step 7: Handle scroll
// On scroll:
// startIndex = Math.floor(scrollTop / itemHeight)
// endIndex = startIndex + visibleCount
// Update state accordingly.

// Step 8: Absolutely position items  (IMPORTANT)(Jitna uper ja raha utna niche push kardo)
// Each rendered item is positioned using:
// top = (startIndex + localIndex) * itemHeight
// This places items at their correct virtual position.


// That line calculates the top pixel position where the item should be placed inside the virtualized list.

// here actually startIndex= index of the currentlyDiplayed item
// and index= 0, 1, 2, 3, 4, 5
// if startIndex= 10, then their position is 10+0
// if startIndex= 11, then their position is 10+1
// if startIndex= 12, then their position is 10+2
// if startIndex= 13, then their position is 10+3



import React, { useState } from 'react'
import { generateVirtualizedUsers } from '../CustomizedDatagenerator'





let users = generateVirtualizedUsers({ count: 200 })
function UseVirtualizedList() {
    return (
        <div>

            <VirtualizedList list={users} containerHeight={600} containerWidth={500} itemHeight={50} />

        </div>
    )
}

export default UseVirtualizedList



function VirtualizedList({ list, containerHeight, containerWidth, itemHeight }) {
    const canDisplayTotalitem = Math.floor(containerHeight / itemHeight)
    const [indices, setIndices] = useState([0, (canDisplayTotalitem - 1)])

    let displayList = list.slice(indices[0], indices[1] + 1)
    const totalHeight = itemHeight * (list.length)

    // console.log(totalHeight)
    const handleScroll = (e) => {
        // User ne top se jitna scroll kiya thatis

        const userScroll = e.target.scrollTop
        console.log(userScroll)

        const newStartItemIndex = Math.floor(userScroll / itemHeight);
        const newEnditemIndex = newStartItemIndex + canDisplayTotalitem

        setIndices([newStartItemIndex, newEnditemIndex])
    }


    return (
        <div
            style={{
                height: `${containerHeight}px`,
                width: `${containerWidth}px`,
            }}
            onScroll={handleScroll}
            className={` bg-green-100 overflow-auto my-1  p-1`}>

            {/* This div play crucial role */}



            <div
                className=' relative'
                style={{ height: `${totalHeight}px` }}
            >

                {
                    displayList.map((item, index) => {
                        return (
                            <div
                                key={index}
                                style={{
                                    height: `${itemHeight}px`,
                                    position: "absolute",
                                    top: `${(indices[0] + index) * itemHeight}px `,
                                    widows: "100%"
                                    // width: `${containerWidth}px`,
                                }}
                                className={`bg-red-100 flex my-1 justify-between  shadow p-2 w-full`}>
                                <span>
                                    {item.name}
                                </span>
                                <span>
                                    {item.email}
                                </span>
                                <span>
                                    {item.role}
                                </span>
                            </div>
                        )
                    })
                }

            </div>
            {/* <div className={` h-${""} `}></div> */}
        </div>
    )
}

export { VirtualizedList }

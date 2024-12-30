import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "~/lib/firebase";

// Function to add a subscriber if the email doesn't already exist
export async function addSubscriberIfNotExists(email: string, time: string) {
    // Create a query against the collection.
    const subscribersQuery = query(collection(db, "subscribers"), where("email", "==", email));

    // Execute the query
    const querySnapshot = await getDocs(subscribersQuery);

    // Check if any documents match
    if (querySnapshot.empty) {
        // No documents found, safe to add a new one
        await addDoc(collection(db, "subscribers"), { email, date: time });
    } else {
        console.log("Subscriber with this email already exists.");
    }
}

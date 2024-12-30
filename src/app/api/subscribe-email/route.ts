import { addSubscriberIfNotExists } from "~/services/firestore/subscribers";

export async function POST(req: Request) {
    try {
        const { email } = await req.json();
        const time = new Date().toISOString();
        await addSubscriberIfNotExists(email, time);

        const res = new Response(null, {
            status: 302,
            headers: {
                Location: "/?subscribed=true",
            },
        });
        return new Response(JSON.stringify({ message: "Subscription successful" }), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (error: any) {
        return new Response(
            JSON.stringify({ message: "Subscription failed", error: error.message }),
            {
                status: 500,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
    }
}

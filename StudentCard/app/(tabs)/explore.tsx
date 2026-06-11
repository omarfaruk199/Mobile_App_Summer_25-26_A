import ProfileCard from "@/components/profile-card";
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet } from "react-native";

export default function App() {
    return (
        <ScrollView contentContainerStyle={styles.screen}>
            <StatusBar style="dark" />

            {/* First card — your own data */}
            <ProfileCard 
                name="omar faruk" 
                studentId="22-48368-3" 
                department="Computer Science — AIUB" 
                bio="Passionate about mobile development and building tools that make everyday life easier."
                skills={["React Native", "JavaScript", "Node.js", "PostgreSQL"]}
            />

            {/* Second card — a classmate's data (same component, different props!) */}
            <ProfileCard 
                name="Tonmoy" 
                studentId="22-48368-3" 
                department="Computer Science — AIUB" 
                bio="Interested in AI and full-stack web development. Loves competitive programming."
                skills={["Python", "Machine Learning", "React", "Django"]} 
            />

            <ProfileCard 
                name="Saad Al Rafi" 
                studentId="22-54321-3" 
                department="Computer Science — AIUB" 
                bio="Aspiring software engineer with a passion for mobile apps and UI/UX design." 
            />

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: "#F0F4F8",
        alignItems: "center",
        paddingTop: 60,
        paddingBottom: 40,
    },
});

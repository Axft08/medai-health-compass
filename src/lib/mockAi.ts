
// This file contains mock AI responses for demonstration purposes
// In a real application, this would be replaced with actual API calls

const DELAY_MS = 1000;

export const getMockResponse = async (query: string): Promise<string> => {
  // Simulate API delay
  await new Promise(r => setTimeout(r, DELAY_MS));
  
  // Convert query to lowercase for easier matching
  const lowercaseQuery = query.toLowerCase();
  
  // Check for keywords to generate appropriate responses
  if (lowercaseQuery.includes("headache")) {
    return `Headaches can be caused by various factors, including stress, dehydration, eye strain, or lack of sleep. Common types include tension headaches, migraines, and cluster headaches.

If you're experiencing:
- Mild to moderate pain: Try over-the-counter pain relievers like acetaminophen or ibuprofen
- Tension headache: Rest, apply a warm compress, or try gentle neck stretches
- Recurring headaches: Keep a headache diary to identify triggers

You should see a doctor if:
- Your headache is severe or sudden
- It's accompanied by fever, stiff neck, confusion, seizures, or vision changes
- It occurs after a head injury
- Your headaches are increasing in frequency or severity`;
  }
  
  if (lowercaseQuery.includes("covid") || lowercaseQuery.includes("coronavirus")) {
    return `Common symptoms of COVID-19 include:
- Fever or chills
- Cough
- Shortness of breath
- Fatigue
- Muscle or body aches
- Headache
- Loss of taste or smell
- Sore throat
- Congestion or runny nose
- Nausea or vomiting
- Diarrhea

If you're experiencing symptoms:
- Get tested for COVID-19
- Stay home and isolate from others
- Rest and stay hydrated
- Monitor your symptoms

Seek emergency medical care if you experience:
- Trouble breathing
- Persistent chest pain or pressure
- Confusion
- Inability to wake or stay awake
- Bluish lips or face

Prevention includes vaccination, wearing masks in crowded indoor settings, good hand hygiene, and staying up-to-date with boosters.`;
  }
  
  if (lowercaseQuery.includes("fever") || lowercaseQuery.includes("temperature")) {
    return `A fever is a temporary increase in body temperature, often due to an infection. Normal body temperature is typically around 98.6°F (37°C).

For managing fever:
- Rest and stay hydrated
- Take over-the-counter medications like acetaminophen or ibuprofen (follow dosage instructions)
- Use a cool compress on your forehead
- Dress in lightweight clothing

Home remedies include:
- Drinking plenty of fluids
- Taking lukewarm baths
- Getting plenty of rest

You should see a doctor if:
- Your temperature exceeds 103°F (39.4°C)
- The fever lasts more than three days
- You have other severe symptoms like shortness of breath
- You have a medical condition that may be affected by fever`;
  }
  
  if (lowercaseQuery.includes("diet") || lowercaseQuery.includes("nutrition")) {
    return `A balanced diet is crucial for maintaining good health. General recommendations include:

- Fruits and vegetables: Aim for 5+ servings daily
- Whole grains: Choose brown rice, whole wheat bread, and oatmeal
- Lean protein: Include fish, poultry, beans, and nuts
- Healthy fats: Consume avocados, olive oil, and nuts in moderation
- Limited added sugars and processed foods
- Adequate hydration: About 8 cups of water daily

For weight management:
- Create a moderate calorie deficit through diet and exercise
- Focus on portion control
- Eat mindfully and slowly
- Include regular physical activity

For specific health conditions like diabetes or heart disease, dietary needs may vary. It's best to consult with a healthcare provider or registered dietitian for personalized advice.`;
  }
  
  if (lowercaseQuery.includes("medicine") || lowercaseQuery.includes("medication")) {
    return `Common over-the-counter medications include:

For pain relief:
- Acetaminophen (Tylenol): For pain and fever
- Ibuprofen (Advil, Motrin): For pain, inflammation, and fever
- Aspirin: For pain and inflammation (not recommended for children)
- Naproxen (Aleve): For pain and inflammation

For allergies:
- Antihistamines: Like loratadine (Claritin), cetirizine (Zyrtec), or diphenhydramine (Benadryl)
- Decongestants: Like pseudoephedrine (Sudafed)

For colds and flu:
- Combination products that may include pain relievers, antihistamines, and decongestants

IMPORTANT DISCLAIMER:
- Always read and follow label directions
- Check for potential drug interactions
- Consult a healthcare provider before taking any medication if you have chronic conditions
- Some medications are not suitable for children, pregnant women, or elderly individuals

This information is not a substitute for professional medical advice. Always consult a healthcare provider for personalized recommendations.`;
  }
  
  // Default response if no specific keywords match
  return `Thank you for your health question. Here's what I can tell you:

Based on the information provided, I'd recommend focusing on general healthy habits:
- Stay hydrated by drinking plenty of water
- Maintain a balanced diet rich in fruits, vegetables, and whole grains
- Get regular physical activity (aim for at least 150 minutes per week)
- Ensure adequate sleep (7-9 hours for adults)
- Manage stress through relaxation techniques or mindfulness

For more specific guidance on your concern, please provide additional details about your symptoms or condition.

Remember, this information is for educational purposes only and isn't a substitute for professional medical advice. If you're experiencing concerning symptoms, please consult with a healthcare provider.`;
};

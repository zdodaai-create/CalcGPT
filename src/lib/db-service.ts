import { 
  collection, 
  addDoc, 
  query, 
  where, 
  getDocs, 
  orderBy, 
  limit, 
  serverTimestamp,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';
import { db } from './firebase';
import { CalculatorConfig } from './calculator-types';

export const dbService = {
  // Save a calculation result
  saveCalculation: async (userId: string | null, calculatorId: string, inputs: any, result: any) => {
    try {
      const docRef = await addDoc(collection(db, "calculations"), {
        userId,
        calculatorId,
        inputs,
        result,
        createdAt: serverTimestamp(),
      });
      return docRef.id;
    } catch (e) {
      console.error("Error adding document: ", e);
      return null;
    }
  },

  // Get calculation history for a user
  getUserHistory: async (userId: string, limitCount: number = 10) => {
    const q = query(
      collection(db, "calculations"), 
      where("userId", "==", userId),
      orderBy("createdAt", "desc"),
      limit(limitCount)
    );
    
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  },

  // Save/Update user profile
  saveUserProfile: async (userId: string, profile: any) => {
    const userRef = doc(db, "users", userId);
    await setDoc(userRef, {
      ...profile,
      updatedAt: serverTimestamp()
    }, { merge: true });
  },

  // Get calculator details (if stored in DB)
  getCalculator: async (slug: string) => {
    const q = query(collection(db, "calculators"), where("slug", "==", slug));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      return { id: querySnapshot.docs[0].id, ...querySnapshot.docs[0].data() } as CalculatorConfig & { id: string };
    }
    return null;
  }
};

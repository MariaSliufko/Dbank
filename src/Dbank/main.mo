import Debug "mo:base/Debug"

  actor DBank {
  stable var currentValue = 300;
  // currentValue := 100;

  let id = 2348923840928349;

  // Debug.print(debug_show(id));

  public func topUp(amount: Nat) {
    currentValue += amount;
    Debug.print(debug_show(currentValue));
  };

  // topUp();

  public func withdrawl(amount: Nat) {
    let tempValue: Int = currentValue - amount;
    if (tempValue >= 0) {
      currentValue -= amount;
      Debug.print(debug_show(currentValue));
    } else {
      Debug.print("Insufficient funds");
    }
    
  };

  public query func checkBalance(): async Nat {
    return currentValue;
  };


}
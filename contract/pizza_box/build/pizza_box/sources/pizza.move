module pizza_box::pizza {
    use std::bcs;
    use iota::object;
    use iota::transfer;
    use iota::tx_context;
    use iota::object::UID;

    public struct Pizza has store {
        olive_oils: u16,
        yeast: u16, 
        flour: u16,
        water: u16,
        salt: u16,
        tomato_sauce: u16,
        cheese: u16,
        pineapple: u16,
    }

    public struct PizzaBox has key, store {
        id: UID,
        pizza: Pizza,
    }

    public struct Flag has key, store {
        id: UID,
        user: address
    }

    const EMamaMiaNonBene: u64 = 0;

    // 🟢 HÀM ENTRY – dApp sẽ gọi hàm này
    #[allow(lint(self_transfer))]
    public entry fun cook(
        olive_oils: u16,
        yeast: u16,
        flour: u16,
        water: u16,
        salt: u16,
        tomato_sauce: u16,
        cheese: u16,
        pineapple: u16,
        ctx: &mut tx_context::TxContext
    ) {
        let sender = tx_context::sender(ctx);

        let p = Pizza {
            olive_oils,
            yeast,
            flour,
            water,
            salt,
            tomato_sauce,
            cheese,
            pineapple,
        };
    
        transfer::public_transfer(
            PizzaBox { id: object::new(ctx), pizza: p },
            sender
        );
    }

    // 🟢 HÀM ENTRY – trả flag cho user nếu pizza đúng “công thức”
    #[allow(lint(self_transfer))]
    public entry fun get_flag(
        pizzabox: &PizzaBox,
        ctx: &mut tx_context::TxContext
    ) {
        // This is where the Pizzaiolo comes in to judge...
        assert!(
            bcs::to_bytes(&pizzabox.pizza) ==
                x"0a000300620272011200c800b4000000",
            EMamaMiaNonBene
        );

        let sender = tx_context::sender(ctx);

        transfer::public_transfer(
            Flag {
                id: object::new(ctx),
                user: sender
            },
            sender
        );
    }    
}

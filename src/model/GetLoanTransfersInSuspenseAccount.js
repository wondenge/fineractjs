

import ApiClient from '../ApiClient';

/**
 * The GetLoanTransfersInSuspenseAccount model module.
 * @module model/GetLoanTransfersInSuspenseAccount
 * @version 1.0
 */
class GetLoanTransfersInSuspenseAccount {
    /**
     * Constructs a new <code>GetLoanTransfersInSuspenseAccount</code>.
     * @alias module:model/GetLoanTransfersInSuspenseAccount
     */
    constructor() { 
        
        GetLoanTransfersInSuspenseAccount.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoanTransfersInSuspenseAccount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoanTransfersInSuspenseAccount} obj Optional instance to populate.
     * @return {module:model/GetLoanTransfersInSuspenseAccount} The populated <code>GetLoanTransfersInSuspenseAccount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoanTransfersInSuspenseAccount();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('glCode')) {
                obj['glCode'] = ApiClient.convertToType(data['glCode'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetLoanTransfersInSuspenseAccount.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetLoanTransfersInSuspenseAccount.prototype['name'] = undefined;

/**
 * @member {Number} glCode
 */
GetLoanTransfersInSuspenseAccount.prototype['glCode'] = undefined;






export default GetLoanTransfersInSuspenseAccount;


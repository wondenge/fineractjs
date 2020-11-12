

import ApiClient from '../ApiClient';
import GetShareAccountsChargeOptions from './GetShareAccountsChargeOptions';

/**
 * The GetClientIdProductIdChargeOptions model module.
 * @module model/GetClientIdProductIdChargeOptions
 * @version 1.0
 */
class GetClientIdProductIdChargeOptions {
    /**
     * Constructs a new <code>GetClientIdProductIdChargeOptions</code>.
     * @alias module:model/GetClientIdProductIdChargeOptions
     */
    constructor() { 
        
        GetClientIdProductIdChargeOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetClientIdProductIdChargeOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetClientIdProductIdChargeOptions} obj Optional instance to populate.
     * @return {module:model/GetClientIdProductIdChargeOptions} The populated <code>GetClientIdProductIdChargeOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetClientIdProductIdChargeOptions();

            if (data.hasOwnProperty('chargeOptions')) {
                obj['chargeOptions'] = GetShareAccountsChargeOptions.constructFromObject(data['chargeOptions']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/GetShareAccountsChargeOptions} chargeOptions
 */
GetClientIdProductIdChargeOptions.prototype['chargeOptions'] = undefined;






export default GetClientIdProductIdChargeOptions;




import ApiClient from '../ApiClient';
import GetSavingsCurrency from './GetSavingsCurrency';

/**
 * The GetSavingsAccountsSummary model module.
 * @module model/GetSavingsAccountsSummary
 * @version 1.0
 */
class GetSavingsAccountsSummary {
    /**
     * Constructs a new <code>GetSavingsAccountsSummary</code>.
     * @alias module:model/GetSavingsAccountsSummary
     */
    constructor() { 
        
        GetSavingsAccountsSummary.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSavingsAccountsSummary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSavingsAccountsSummary} obj Optional instance to populate.
     * @return {module:model/GetSavingsAccountsSummary} The populated <code>GetSavingsAccountsSummary</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSavingsAccountsSummary();

            if (data.hasOwnProperty('currency')) {
                obj['currency'] = GetSavingsCurrency.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('accountBalance')) {
                obj['accountBalance'] = ApiClient.convertToType(data['accountBalance'], 'Number');
            }
            if (data.hasOwnProperty('availableBalance')) {
                obj['availableBalance'] = ApiClient.convertToType(data['availableBalance'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/GetSavingsCurrency} currency
 */
GetSavingsAccountsSummary.prototype['currency'] = undefined;

/**
 * @member {Number} accountBalance
 */
GetSavingsAccountsSummary.prototype['accountBalance'] = undefined;

/**
 * @member {Number} availableBalance
 */
GetSavingsAccountsSummary.prototype['availableBalance'] = undefined;






export default GetSavingsAccountsSummary;


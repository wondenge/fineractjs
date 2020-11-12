

import ApiClient from '../ApiClient';
import GetSavingsCurrency from './GetSavingsCurrency';

/**
 * The GetSavingsSummary model module.
 * @module model/GetSavingsSummary
 * @version 1.0
 */
class GetSavingsSummary {
    /**
     * Constructs a new <code>GetSavingsSummary</code>.
     * @alias module:model/GetSavingsSummary
     */
    constructor() { 
        
        GetSavingsSummary.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSavingsSummary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSavingsSummary} obj Optional instance to populate.
     * @return {module:model/GetSavingsSummary} The populated <code>GetSavingsSummary</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSavingsSummary();

            if (data.hasOwnProperty('currency')) {
                obj['currency'] = GetSavingsCurrency.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('accountBalance')) {
                obj['accountBalance'] = ApiClient.convertToType(data['accountBalance'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/GetSavingsCurrency} currency
 */
GetSavingsSummary.prototype['currency'] = undefined;

/**
 * @member {Number} accountBalance
 */
GetSavingsSummary.prototype['accountBalance'] = undefined;






export default GetSavingsSummary;


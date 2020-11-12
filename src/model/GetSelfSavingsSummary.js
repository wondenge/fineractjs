  

import ApiClient from '../ApiClient';
import GetSelfSavingsCurrency from './GetSelfSavingsCurrency';

/**
 * The GetSelfSavingsSummary model module.
 * @module model/GetSelfSavingsSummary
 * @version 1.0
 */
class GetSelfSavingsSummary {
    /**
     * Constructs a new <code>GetSelfSavingsSummary</code>.
     * @alias module:model/GetSelfSavingsSummary
     */
    constructor() { 
        
        GetSelfSavingsSummary.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSelfSavingsSummary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSelfSavingsSummary} obj Optional instance to populate.
     * @return {module:model/GetSelfSavingsSummary} The populated <code>GetSelfSavingsSummary</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSelfSavingsSummary();

            if (data.hasOwnProperty('currency')) {
                obj['currency'] = GetSelfSavingsCurrency.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('accountBalance')) {
                obj['accountBalance'] = ApiClient.convertToType(data['accountBalance'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/GetSelfSavingsCurrency} currency
 */
GetSelfSavingsSummary.prototype['currency'] = undefined;

/**
 * @member {Number} accountBalance
 */
GetSelfSavingsSummary.prototype['accountBalance'] = undefined;






export default GetSelfSavingsSummary;




import ApiClient from '../ApiClient';
import PostFloatingRatesRatePeriods from './PostFloatingRatesRatePeriods';

/**
 * The PutFloatingRatesChanges model module.
 * @module model/PutFloatingRatesChanges
 * @version 1.0
 */
class PutFloatingRatesChanges {
    /**
     * Constructs a new <code>PutFloatingRatesChanges</code>.
     * @alias module:model/PutFloatingRatesChanges
     */
    constructor() { 
        
        PutFloatingRatesChanges.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutFloatingRatesChanges</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutFloatingRatesChanges} obj Optional instance to populate.
     * @return {module:model/PutFloatingRatesChanges} The populated <code>PutFloatingRatesChanges</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutFloatingRatesChanges();

            if (data.hasOwnProperty('ratePeriods')) {
                obj['ratePeriods'] = ApiClient.convertToType(data['ratePeriods'], [PostFloatingRatesRatePeriods]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/PostFloatingRatesRatePeriods>} ratePeriods
 */
PutFloatingRatesChanges.prototype['ratePeriods'] = undefined;






export default PutFloatingRatesChanges;


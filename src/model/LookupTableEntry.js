

import ApiClient from '../ApiClient';

/**
 * The LookupTableEntry model module.
 * @module model/LookupTableEntry
 * @version 1.0
 */
class LookupTableEntry {
    /**
     * Constructs a new <code>LookupTableEntry</code>.
     * @alias module:model/LookupTableEntry
     */
    constructor() { 
        
        LookupTableEntry.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LookupTableEntry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LookupTableEntry} obj Optional instance to populate.
     * @return {module:model/LookupTableEntry} The populated <code>LookupTableEntry</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LookupTableEntry();

            if (data.hasOwnProperty('valueFrom')) {
                obj['valueFrom'] = ApiClient.convertToType(data['valueFrom'], 'Number');
            }
            if (data.hasOwnProperty('valueTo')) {
                obj['valueTo'] = ApiClient.convertToType(data['valueTo'], 'Number');
            }
            if (data.hasOwnProperty('score')) {
                obj['score'] = ApiClient.convertToType(data['score'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} valueFrom
 */
LookupTableEntry.prototype['valueFrom'] = undefined;

/**
 * @member {Number} valueTo
 */
LookupTableEntry.prototype['valueTo'] = undefined;

/**
 * @member {Number} score
 */
LookupTableEntry.prototype['score'] = undefined;






export default LookupTableEntry;


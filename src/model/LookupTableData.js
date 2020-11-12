

import ApiClient from '../ApiClient';
import LookupTableEntry from './LookupTableEntry';

/**
 * The LookupTableData model module.
 * @module model/LookupTableData
 * @version 1.0
 */
class LookupTableData {
    /**
     * Constructs a new <code>LookupTableData</code>.
     * @alias module:model/LookupTableData
     */
    constructor() { 
        
        LookupTableData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LookupTableData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LookupTableData} obj Optional instance to populate.
     * @return {module:model/LookupTableData} The populated <code>LookupTableData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LookupTableData();

            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('entries')) {
                obj['entries'] = ApiClient.convertToType(data['entries'], [LookupTableEntry]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} key
 */
LookupTableData.prototype['key'] = undefined;

/**
 * @member {String} description
 */
LookupTableData.prototype['description'] = undefined;

/**
 * @member {Array.<module:model/LookupTableEntry>} entries
 */
LookupTableData.prototype['entries'] = undefined;






export default LookupTableData;


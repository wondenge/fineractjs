

import ApiClient from '../ApiClient';
import LoanProductProvisioningEntryData from './LoanProductProvisioningEntryData';

/**
 * The ProvisioningEntryData model module.
 * @module model/ProvisioningEntryData
 * @version 1.0
 */
class ProvisioningEntryData {
    /**
     * Constructs a new <code>ProvisioningEntryData</code>.
     * @alias module:model/ProvisioningEntryData
     */
    constructor() { 
        
        ProvisioningEntryData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProvisioningEntryData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProvisioningEntryData} obj Optional instance to populate.
     * @return {module:model/ProvisioningEntryData} The populated <code>ProvisioningEntryData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProvisioningEntryData();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('createdDate')) {
                obj['createdDate'] = ApiClient.convertToType(data['createdDate'], 'Date');
            }
            if (data.hasOwnProperty('entries')) {
                obj['entries'] = ApiClient.convertToType(data['entries'], [LoanProductProvisioningEntryData]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
ProvisioningEntryData.prototype['id'] = undefined;

/**
 * @member {Date} createdDate
 */
ProvisioningEntryData.prototype['createdDate'] = undefined;

/**
 * @member {Array.<module:model/LoanProductProvisioningEntryData>} entries
 */
ProvisioningEntryData.prototype['entries'] = undefined;






export default ProvisioningEntryData;


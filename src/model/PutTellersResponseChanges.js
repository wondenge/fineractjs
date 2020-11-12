

import ApiClient from '../ApiClient';

/**
 * The PutTellersResponseChanges model module.
 * @module model/PutTellersResponseChanges
 * @version 1.0
 */
class PutTellersResponseChanges {
    /**
     * Constructs a new <code>PutTellersResponseChanges</code>.
     * @alias module:model/PutTellersResponseChanges
     */
    constructor() { 
        
        PutTellersResponseChanges.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutTellersResponseChanges</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutTellersResponseChanges} obj Optional instance to populate.
     * @return {module:model/PutTellersResponseChanges} The populated <code>PutTellersResponseChanges</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutTellersResponseChanges();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('endDate')) {
                obj['endDate'] = ApiClient.convertToType(data['endDate'], 'Date');
            }
            if (data.hasOwnProperty('startDate')) {
                obj['startDate'] = ApiClient.convertToType(data['startDate'], 'Date');
            }
            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
            if (data.hasOwnProperty('dateFormat')) {
                obj['dateFormat'] = ApiClient.convertToType(data['dateFormat'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} description
 */
PutTellersResponseChanges.prototype['description'] = undefined;

/**
 * @member {Date} endDate
 */
PutTellersResponseChanges.prototype['endDate'] = undefined;

/**
 * @member {Date} startDate
 */
PutTellersResponseChanges.prototype['startDate'] = undefined;

/**
 * @member {String} locale
 */
PutTellersResponseChanges.prototype['locale'] = undefined;

/**
 * @member {String} dateFormat
 */
PutTellersResponseChanges.prototype['dateFormat'] = undefined;






export default PutTellersResponseChanges;


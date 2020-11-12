

import ApiClient from '../ApiClient';

/**
 * The GeoCodeData model module.
 * @module model/GeoCodeData
 * @version 1.0
 */
class GeoCodeData {
    /**
     * Constructs a new <code>GeoCodeData</code>.
     * @alias module:model/GeoCodeData
     * @param latitude {String} 
     * @param longitude {String} 
     */
    constructor(latitude, longitude) { 
        
        GeoCodeData.initialize(this, latitude, longitude);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, latitude, longitude) { 
        obj['latitude'] = latitude;
        obj['longitude'] = longitude;
    }

    /**
     * Constructs a <code>GeoCodeData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GeoCodeData} obj Optional instance to populate.
     * @return {module:model/GeoCodeData} The populated <code>GeoCodeData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GeoCodeData();

            if (data.hasOwnProperty('latitude')) {
                obj['latitude'] = ApiClient.convertToType(data['latitude'], 'String');
            }
            if (data.hasOwnProperty('longitude')) {
                obj['longitude'] = ApiClient.convertToType(data['longitude'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} latitude
 */
GeoCodeData.prototype['latitude'] = undefined;

/**
 * @member {String} longitude
 */
GeoCodeData.prototype['longitude'] = undefined;






export default GeoCodeData;

